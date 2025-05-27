export default function HowItWorksSection() {
    return (
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Three simple steps to transform your photos into cartoon masterpieces
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-bold">Upload Your Photo</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Take a selfie or choose a photo from your gallery to get started.
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-24 h-4 border-t-2 border-dashed border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
                <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">2</span>
              </div>
              <h3 className="text-xl font-bold">Choose Your Style</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Select from Ghibli, Disney, Pixar, Anime, or Comic Book styles.
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-24 h-4 border-t-2 border-dashed border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</span>
              </div>
              <h3 className="text-xl font-bold">Get Your Cartoon</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Watch the magic happen as our AI transforms your photo in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  