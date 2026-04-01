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
    answer: "Very little. Your only responsibility is sharing our ready-made promotional materials with parents. We handle everything else — from session delivery to follow-up resources. Most schools spend less than 30 minutes total per session."
  },
  {
    question: "What happens if parents miss a session?",
    answer: "All parents receive access to session recordings, so they can catch up at a time that suits them. This ensures maximum reach across your community, even for parents who cannot attend live."
  },
  {
    question: "How does parent registration work?",
    answer: "We provide you with promotional materials including a registration link. Parents register directly through our system — there is no administration for your team. We send you attendance reports after each session."
  },
  {
    question: "Are session recordings available?",
    answer: "Yes. All sessions are recorded and made available to registered parents after the live event. This is included as standard with all programmes."
  },
  {
    question: "Is PATI suitable for primary and secondary schools?",
    answer: "Yes. Our modules are designed for parents of children aged 5-18. We tailor content and examples based on your school type, and many schools run sessions for both primary and secondary parent audiences."
  },
  {
    question: "How are the sessions delivered?",
    answer: "All sessions are delivered live online via video conference. Parents receive a link to join from home at a scheduled time. This approach ensures high attendance and eliminates the need for venue booking or equipment setup."
  },
  {
    question: "Can we start with just one module to try it?",
    answer: "Yes. Many schools begin with a single introductory session to gauge parent interest before committing to a full programme. It is a low-risk way to experience PATI and build momentum."
  },
  {
    question: "Who delivers the programme?",
    answer: "The programme is delivered by Dr Richard Hogan, Family Psychotherapist and founder of the Parenting and Technology Institute, with extensive experience supporting families, schools, and organisations."
  }
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
              Practical answers for school leaders evaluating the programme.
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

