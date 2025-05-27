import TestimonialCard from "@/components/testimonial-card"

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Join thousands of happy users who have transformed their photos with CartoonifAI
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <TestimonialCard
            name="Sarah J."
            avatar="/sarah.png"
            rating={5}
            text="I've tried so many photo editing apps, but the Ghibli style in CartoonifAI is on another level! I used it for my Instagram profile and got over 200 likes in an hour. Worth watching a few ads for this quality!"
          />
          <TestimonialCard
            name="Michael T."
            avatar="/michael.png"
            rating={5}
            text="As a huge Invincible fan, I was skeptical, but wow! The comic book filter actually made me look like I could be in the series. My gaming buddies all downloaded it after seeing my Discord profile pic. The ads aren't even that annoying."
            featured={true}
          />
          <TestimonialCard
            name="Aisha K."
            avatar="/aisha.png"
            rating={5}
            text="My kids are obsessed with Disney movies, so I transformed our family photo into Disney style for our Christmas cards. Everyone thought we had it professionally done! Totally worth sitting through a few ads for this quality."
          />
        </div>
      </div>
    </section>
  )
}
