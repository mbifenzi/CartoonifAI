"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "How does CartoonifAI work?",
      answer:
        "CartoonifAI uses advanced artificial intelligence to analyze your photos and transform them into different cartoon styles. Our proprietary algorithms identify facial features and apply artistic transformations based on the style you choose.",
    },
    {
      question: "Is my data safe with CartoonifAI?",
      answer:
        "Yes, your privacy is our top priority. We don't store your original photos on our servers longer than necessary for processing. All transformations happen securely, and we never share your data with third parties.",
    },
    {
      question: "Is CartoonifAI really free to use?",
      answer:
        "Yes! CartoonifAI is completely free to use. The app is supported by advertisements, which allows us to provide high-quality cartoon transformations without charging you anything. Just watch a short ad occasionally to keep enjoying our service.",
    },
    {
      question: "How long does it take to transform a photo?",
      answer:
        "Most transformations are completed within seconds. However, during peak usage times or for particularly complex images, it might take up to a minute.",
    },
    {
      question: "Can I use the cartoonified images commercially?",
      answer:
        "The cartoon transformations created through our Service are for personal use only. You may share these transformations on social media for personal purposes, but you may not use them for commercial purposes.",
    },
    {
      question: "Which devices support CartoonifAI?",
      answer:
        "CartoonifAI is available on iOS and Android devices. We recommend using devices with iOS 13+ or Android 8+ for the best experience. We also have a web version coming soon!",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-500 dark:text-gray-400">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
