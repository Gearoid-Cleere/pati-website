"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does the school have to do?",
    answer:
      "Your school shares PATI information and registration opportunities with parents through existing school communication channels. PATI provides the ready-to-share communications, delivers the programme, and works with you throughout to support participation.",
  },
  {
    question: "What happens after our school registers?",
    answer:
      "PATI will be in touch with the information and communications your school needs to share with parents. You share the programme opportunity through your usual channels. As parents register, PATI communicates with those participants about the programme, and continues to work with your school to support participation.",
  },
  {
    question: "How do parents register?",
    answer: "Parents register individually for €14.95.",
  },
  {
    question: "Does the school pay the €14.95 parent fee?",
    answer:
      "No. Annual School Registration is €499.95. Parents register and pay €14.95 individually.",
  },
  {
    question: "How does communication with parents work?",
    answer:
      "PATI provides schools with information and communications to share with their parent community. Schools use their existing communication channels to share the programme and registration opportunities. Once parents register, PATI also communicates directly with those participants about programme access and participation.",
  },
  {
    question: "Are sessions live and online?",
    answer:
      "Yes. The programme is delivered live online. Parents join from home at the scheduled times.",
  },
  {
    question: "Are recordings available?",
    answer: "Yes. Recordings are available after each session.",
  },
  {
    question: "Is the programme suitable for primary and secondary schools?",
    answer:
      "Yes. The programme is designed for parents of children across primary and secondary school age.",
  },
  {
    question: "Who delivers the programme?",
    answer:
      "The programme is delivered by Dr Richard Hogan, Family Psychotherapist and Co-Founder of the Parenting & Technology Institute.",
  },
  {
    question: "What does annual school registration mean?",
    answer:
      "Annual School Registration is €499.95. It is your school's registration with PATI for the year, covering the PATI–school relationship, ready-to-share communications, and programme delivery for your parent community. Payment is made as a single checkout. Renewal is arranged with PATI when the year concludes.",
  },
]

export function SchoolsFaq() {
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
