"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Does our organisation have to pay for each participant?",
    answer:
      "No. Your organisation pays the €999.95 organisation registration fee. Individual participants then register and pay €24.95 directly to PATI.",
  },
  {
    question: "How do our employees register?",
    answer:
      "After your organisation registers, PATI sends you a unique registration link. You can distribute that link to employees or parents you wish to invite.",
  },
  {
    question: "Do we have to manage participant payments?",
    answer: "No. Participants register and pay PATI directly through Stripe.",
  },
  {
    question: "Does PATI communicate directly with participants?",
    answer:
      "Yes. Once registered, participants receive relevant programme and joining communications from PATI.",
  },
  {
    question: "What if we'd like to speak to PATI before registering?",
    answer:
      "We'd be delighted to discuss the programme and how it could work for your organisation.",
  },
]

export function OrganisationsFaq() {
  return (
    <section className="bg-secondary/20 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-xl border border-border/60 bg-card px-6"
              >
                <AccordionTrigger className="py-5 text-left font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <Button size="lg" variant="outline" asChild className="h-12 px-8 text-[15px]">
              <Link href="/contact">Contact PATI</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
