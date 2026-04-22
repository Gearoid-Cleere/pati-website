"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much administrative work is involved for our school?",
    answer:
      "Very little. Your role is to share our ready-made communications with parents. We handle the delivery of the sessions, recordings, and resources, keeping the process simple for your team.",
  },
  {
    question: "What happens if parents miss a session?",
    answer:
      "All sessions are recorded and shared with parents afterward, so they can access the content at a time that suits them.",
  },
  {
    question: "How does parent registration work?",
    answer:
      "We provide you with ready-to-send communications including a registration link. Parents register directly, so there is no administration required from your team.",
  },
  {
    question: "Are session recordings available?",
    answer:
      "Yes. Recordings are available after each session, allowing parents to revisit content or catch up if they cannot attend live.",
  },
  {
    question: "Is PATI suitable for primary and secondary schools?",
    answer:
      "Yes. The programme is designed for parents of children across primary and secondary school age, with content that reflects the different challenges families face at each stage.",
  },
  {
    question: "How are the sessions delivered?",
    answer:
      "All sessions are delivered live online. Parents join from home at a scheduled time, removing the need for any venue or setup within the school.",
  },
  {
    question: "Who delivers the programme?",
    answer:
      "The programme is delivered by Dr Richard Hogan, Family Psychotherapist and founder of the Parenting and Technology Institute.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Common Questions
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Everything Schools Ask Us
            </h2>

            <p className="text-muted-foreground">
              Clear answers to the most common questions from schools considering the programme.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground pb-5">
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
