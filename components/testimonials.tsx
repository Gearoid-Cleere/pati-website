const testimonials = [
  {
    quote:
      "PATI gave us practical tools we could implement immediately. The sessions were insightful and the ongoing support has been invaluable for our family.",
    author: "Sarah M.",
    role: "Parent",
  },
  {
    quote:
      "Rolling out PATI across our school community has transformed how parents engage with technology topics. The programme is well-structured and professionally delivered.",
    author: "James R.",
    role: "School Principal",
  },
  {
    quote:
      "Our employees have found the corporate sessions incredibly valuable. It's a unique offering that supports working parents in a meaningful way.",
    author: "Emma T.",
    role: "HR Director",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-20 text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What People Say
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-10 lg:p-12"
            >
              <blockquote className="flex-grow text-[15px] leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-10 border-t border-border/60 pt-6">
                <p className="font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
