import FAQAccordion from "@/components/faq-accordion"

export default function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Everything you need to know about CartoonifAI
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion />
        </div>
      </div>
    </section>
  )
}
