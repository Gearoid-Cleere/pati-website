import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does it cost for schools to participate?",
    answer:
      "We offer flexible pricing models for schools. Contact us to discuss options that work for your school community, including subsidised programmes for DEIS schools.",
  },
  {
    question: "How much time does it take to deliver the programme?",
    answer:
      "The full programme consists of eight modules. Schools typically deliver one session per week over two school terms, though we offer flexible scheduling to suit your calendar.",
  },
  {
    question: "Do we need any special equipment or facilities?",
    answer:
      "Sessions can be delivered in any standard classroom or hall with a projector. For online delivery, parents join via video conferencing from home.",
  },
  {
    question: "What training is provided for school staff?",
    answer:
      "We provide comprehensive training for any staff involved in programme coordination. This includes briefings on content, logistics, and how to promote the programme to parents.",
  },
  {
    question: "Can parents who can't attend live sessions still participate?",
    answer:
      "Yes. All sessions are recorded and made available to registered parents. We also provide supplementary resources that can be accessed at any time.",
  },
  {
    question: "How do we become a Registered PATI School?",
    answer:
      "Schools that complete the full programme delivery become Registered PATI Schools. This recognises your commitment to supporting family digital wellbeing and provides ongoing benefits.",
  },
]

export function SchoolsFaq() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-20 text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Common questions from schools considering the PATI programme
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/60 py-2"
              >
                <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
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
