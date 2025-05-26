import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  avatar: string
  rating: number
  text: string
  featured?: boolean
}

export default function TestimonialCard({ name, avatar, rating, text, featured = false }: TestimonialCardProps) {
  return (
    <Card
      className={`${
        featured ? "border-purple-200 dark:border-purple-900/50 shadow-lg" : "border-gray-200 dark:border-gray-800"
      } transition-all hover:shadow-md`}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium">{name}</h4>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{text}</p>
        {featured && (
          <div className="mt-4 text-sm text-purple-600 dark:text-purple-400 font-medium">★ Featured Review</div>
        )}
      </CardContent>
    </Card>
  )
}
