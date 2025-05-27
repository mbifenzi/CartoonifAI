import { type NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import Replicate from "replicate"

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Initialize Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// Style to model mapping with proper configurations
const STYLE_CONFIGS = {
  ghibli: {
    model: "astramlco/easycontrol-ghibli:9ad8a8970c83024fbce9ea054bb62652fec08c6c12dd39eda39cd0833ad36e2f",
    getInput: (imageUrl: string) => ({
      seed: 42,
      width: 1024,
      height: 1024,
      prompt: "Ghibli Studio style, Charming hand-drawn anime-style illustration",
      zero_steps: 1,
      spatial_img: imageUrl,
      control_type: "Ghibli",
      output_format: "png",
      use_zero_init: true,
      output_quality: 90,
    }),
  },
  disney: {
    model: "tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4",
    getInput: (imageUrl: string) => ({
      width: 1024,
      height: 1024,
      spatial_img: imageUrl,
    }),
  },
  pixar: {
    model: "lucataco/animate-diff:beecf59c4aee8d81bf04f0381033dfa10dc16e845b83c17a705dc2e2e2b1e1e6",
    getInput: (imageUrl: string) => ({
      width: 1024,
      height: 1024,
      spatial_img: imageUrl,
    }),
  },
  anime: {
    model: "cjwbw/animagine-xl-3.1:7857c26f9b7f4d3c8b6b3c7e8f9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8",
    getInput: (imageUrl: string) => ({
      width: 1024,
      height: 1024,
      spatial_img: imageUrl,
    }),
  },
  comics: {
    model: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    getInput: (imageUrl: string) => ({
      width: 1024,
      height: 1024,
      spatial_img: imageUrl,
    }),
  },
  simpsons: {
    model: "fofr/sdxl-simpsons:49a0d0c4c7b8e1d6b8e5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5",
    getInput: (imageUrl: string) => ({
      width: 1024,
      height: 1024,
      spatial_img: imageUrl,
    }),
  },
} as const

// Supported file types
const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/heic", "image/heif"]

// Helper function to delete image from Cloudinary
async function deleteFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId)
    console.log(`Successfully deleted image from Cloudinary: ${publicId}`)
  } catch (error) {
    console.error(`Failed to delete image from Cloudinary: ${publicId}`, error)
    // Don't throw error here as the main process should continue
  }
}

// Helper function to poll Replicate prediction status
async function pollReplicateResult(prediction: any, maxAttempts = 60): Promise<any> {
  let attempts = 0

  while (attempts < maxAttempts) {
    try {
      const current = await replicate.predictions.get(prediction.id)

      if (current.status === "succeeded") {
        return current
      } else if (current.status === "failed") {
        throw new Error(`Replicate prediction failed: ${current.error}`)
      } else if (current.status === "canceled") {
        throw new Error("Replicate prediction was canceled")
      }

      // Wait 2 seconds before next poll
      await new Promise((resolve) => setTimeout(resolve, 2000))
      attempts++
    } catch (error) {
      console.error(`Polling attempt ${attempts + 1} failed:`, error)
      attempts++

      if (attempts >= maxAttempts) {
        throw error
      }

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }
  }

  throw new Error("Prediction timed out after maximum attempts")
}

export async function POST(request: NextRequest) {
  let uploadedPublicId: string | null = null
  const startTime = Date.now()

  try {
    // Parse the form data
    const formData = await request.formData()
    const photo = formData.get("photo") as File
    const type = formData.get("type") as string
    const apiKey = formData.get("api_key") as string

    // Validate API key first
    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    if (apiKey !== process.env.CARTOONIFAI_API_KEY) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 403 })
    }

    // Validate inputs
    if (!photo) {
      return NextResponse.json({ error: "Photo is required" }, { status: 400 })
    }

    // Check file type
    if (!SUPPORTED_FORMATS.includes(photo.type.toLowerCase())) {
      return NextResponse.json(
        {
          error: `Unsupported file format. Supported formats: ${SUPPORTED_FORMATS.join(", ")}`,
        },
        { status: 400 },
      )
    }

    // Check file size (10MB limit)
    if (photo.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 10MB" }, { status: 400 })
    }

    if (!type || !STYLE_CONFIGS[type as keyof typeof STYLE_CONFIGS]) {
      return NextResponse.json(
        { error: "Valid type is required (ghibli, disney, pixar, anime, comics, simpsons)" },
        { status: 400 },
      )
    }

    // Check if Cloudinary is properly configured
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json({ error: "Cloudinary configuration is missing" }, { status: 500 })
    }

    console.log(`Starting transformation for type: ${type}`)

    // Convert file to buffer
    const bytes = await photo.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Cloudinary with format conversion
    const uploadResult = (await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
            folder: "cartoonifai",
            // Force conversion to JPEG and resize to 1024x1024
            transformation: [
              { width: 1024, height: 1024, crop: "fill" },
              { quality: "auto" },
              { format: "jpg" }, // This will convert HEIC to JPG
            ],
            // Additional options for better compatibility
            flags: "progressive",
            fetch_format: "auto",
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error)
              reject(error)
            } else {
              resolve(result)
            }
          },
        )
        .end(buffer)
    })) as any

    if (!uploadResult?.secure_url) {
      return NextResponse.json({ error: "Failed to upload image to Cloudinary" }, { status: 500 })
    }

    // Store the public_id for cleanup
    uploadedPublicId = uploadResult.public_id
    console.log("Cloudinary upload successful:", uploadResult.secure_url)

    // Get the style configuration
    const styleConfig = STYLE_CONFIGS[type as keyof typeof STYLE_CONFIGS]
    const modelId = styleConfig.model
    const input = styleConfig.getInput(uploadResult.secure_url)

    console.log("Starting Replicate transformation with input:", input)

    // Create prediction instead of running directly
    const prediction = await replicate.predictions.create({
      version: modelId,
      input: input,
    })

    console.log(`Replicate prediction created: ${prediction.id}`)

    // Poll for result with timeout handling
    const replicateResponse = await pollReplicateResult(prediction)

    // Extract the transformed image URL
    let transformedUrl = null

    if (replicateResponse.output && Array.isArray(replicateResponse.output) && replicateResponse.output.length > 0) {
      transformedUrl = replicateResponse.output[0]
    } else if (typeof replicateResponse.output === "string") {
      transformedUrl = replicateResponse.output
    }

    if (!transformedUrl) {
      // Clean up uploaded image before returning error
      if (uploadedPublicId) {
        await deleteFromCloudinary(uploadedPublicId)
      }
      return NextResponse.json(
        {
          error: "Failed to get transformed image from Replicate",
          debug: {
            prediction_id: prediction.id,
            status: replicateResponse.status,
            output: replicateResponse.output,
          },
        },
        { status: 500 },
      )
    }

    // Schedule image deletion after successful processing
    if (uploadedPublicId) {
      // Use setTimeout to delete after a short delay to ensure the transformation is complete
      setTimeout(async () => {
        await deleteFromCloudinary(uploadedPublicId!)
      }, 5000) // Delete after 5 seconds
    }

    const totalTime = Date.now() - startTime

    // Return the result with additional metadata
    return NextResponse.json({
      success: true,
      data: {
        original_url: uploadResult.secure_url,
        transformed_url: transformedUrl,
        style: type,
        cloudinary_public_id: uploadResult.public_id,
        processing_time: replicateResponse?.metrics?.predict_time || null,
        total_time: totalTime,
        replicate_id: replicateResponse?.id || null,
        replicate_status: replicateResponse?.status || "completed",
        original_format: photo.type,
        file_size: photo.size,
        data_retention: "Image automatically deleted from our servers after processing",
      },
    })
  } catch (error) {
    console.error("Transform API Error:", error)

    // Clean up uploaded image in case of any error
    if (uploadedPublicId) {
      await deleteFromCloudinary(uploadedPublicId)
    }

    // Return more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("Could not load spatial image")) {
        return NextResponse.json(
          {
            error: "Image format not supported by AI model. Please try a different image or format.",
          },
          { status: 400 },
        )
      }
      if (error.message.includes("Prediction failed") || error.message.includes("prediction failed")) {
        return NextResponse.json(
          {
            error: "AI transformation failed. Please try again with a different image.",
          },
          { status: 500 },
        )
      }
      if (error.message.includes("timed out")) {
        return NextResponse.json(
          {
            error: "Transformation is taking longer than expected. Please try again.",
          },
          { status: 408 },
        )
      }
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Optional: Add GET method for health check
export async function GET() {
  return NextResponse.json({
    message: "CartoonifAI Transform API is running",
    supported_styles: Object.keys(STYLE_CONFIGS),
    supported_formats: SUPPORTED_FORMATS,
    max_file_size: "10MB",
    data_retention: "Images are automatically deleted from our servers after processing",
    max_duration: "300 seconds",
  })
}
