import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the PATI programme?",
    answer:
      "PATI is an expert-led programme designed to support parents, schools, and organisations in navigating technology challenges with children. Our comprehensive curriculum covers essential topics from screen time boundaries to online safety.",
  },
  {
    question: "How do schools implement the programme?",
    answer:
      "Schools can register to offer PATI to their parent community. We provide all materials, training, and ongoing support to ensure successful implementation. Sessions can be delivered in-person or online.",
  },
  {
    question: "Can I join as an individual parent?",
    answer:
      "Yes. Parents can join PATI directly through our open sessions. You'll have access to live workshops, recorded content, and practical resources to support your family.",
  },
  {
    question: "What does the corporate wellbeing programme include?",
    answer:
      "PATI Corporate offers tailored sessions for organisations looking to support working parents. Sessions can be customised to your workplace needs and delivered during work hours or as part of wellbeing initiatives.",
  },
  {
    question: "How long does the programme run?",
    answer:
      "The full programme consists of eight modules delivered over several weeks. However, we offer flexible delivery options to suit different schedules and needs.",
  },
  {
    question: "Is there ongoing support after completing the programme?",
    answer:
      "Absolutely. All participants receive access to our resource library, community forums, and periodic update sessions to stay current with evolving technology trends.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-20 text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Frequently Asked Questions
          </h2>
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
