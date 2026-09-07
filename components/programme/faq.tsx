"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is the programme structured?",
    answer:
      "The programme runs over 4 weeks, with 4 live online sessions covering 8 modules — two modules in each session. Recordings are available afterwards.",
  },
  {
    question: "When does the next programme begin?",
    answer: "The next programme starts on 29 September 2026.",
  },
  {
    question: "Are the sessions live and online?",
    answer:
      "Yes. The programme is delivered live online. You join from home at the scheduled times.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "Recordings are available afterwards, so you can still follow the programme if you cannot attend live.",
  },
  {
    question: "Who delivers the programme?",
    answer:
      "The programme is delivered by Dr Richard Hogan, Family Psychotherapist and Co-Founder of the Parenting and Technology Institute (PATI).",
  },
  {
    question: "Who is the programme for?",
    answer:
      "PATI is for parents navigating technology, teenagers and family life. It is designed for parents of children across primary and secondary school age. Schools and organisations can also register so their communities can take part.",
  },
  {
    question: "What does registration include?",
    answer:
      "Registration includes the structured 8-module programme, 4 live online sessions, recordings, programme resources and materials, and joining information sent after registration.",
  },
  {
    question: "Which access option should I choose?",
    answer:
      "Independent Parent registration is €79.95 and is open to all parents. If your school is already registered with PATI, you can join for €14.95. Schools register annually for €499.95. Organisations register for €999.95; associated participants then join through the organisation’s private link for €24.95. There is no public organisation-user registration page.",
  },
]

export function ProgrammeFaq() {
  return (
    <section className="bg-background py-20 lg:py-24">
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
        </div>
      </div>
    </section>
  )
}
