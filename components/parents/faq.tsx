"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is the programme for?",
    answer:
      "PATI is for parents navigating technology, teenagers and family life. The programme is designed for parents of children across primary and secondary school age.",
  },
  {
    question: "Are the sessions live and what if I miss one?",
    answer:
      "Yes. The programme is delivered live online. You join from home at the scheduled times. Recordings are available afterwards if you cannot attend live.",
  },
  {
    question: "What is included in the €79.95 independent registration?",
    answer:
      "Independent registration of €79.95 includes access to the structured 8-module programme, 4 live online sessions, recordings, programme resources, and joining information after registration.",
  },
  {
    question: "Who can join through their school for €14.95?",
    answer:
      "The €14.95 access price is available to parents whose school is already registered with PATI. Parents whose school is not participating can join independently for €79.95.",
  },
  {
    question: "What happens after I register?",
    answer:
      "After registration, PATI will send programme and joining information to the email address you provide.",
  },
  {
    question: "Who delivers the programme?",
    answer:
      "The programme is delivered by Dr Richard Hogan, Family Psychotherapist and Co-Founder of the Parenting and Technology Institute (PATI).",
  },
  {
    question: "Do I need any special technology?",
    answer:
      "No. You need a device with internet access so you can join the live online sessions and view recordings.",
  },
]

export function ParentsFaq() {
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
