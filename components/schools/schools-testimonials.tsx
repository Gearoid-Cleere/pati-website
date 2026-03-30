const testimonials = [
  {
    quote:
      "Rolling out PATI across our school community has transformed how parents engage with technology topics. The programme is well-structured and professionally delivered.",
    author: "James R.",
    role: "School Principal",
    school: "St. Mary's National School",
  },
  {
    quote:
      "The feedback from parents has been overwhelmingly positive. PATI gave them practical tools they could implement immediately at home.",
    author: "Aoife K.",
    role: "Deputy Principal",
    school: "Scoil Bhríde",
  },
  {
    quote:
      "As a parent liaison, I've seen many programmes come and go. PATI stands out for its quality, relevance, and the ongoing support provided to schools.",
    author: "Michael D.",
    role: "Home School Liaison",
    school: "St. Patrick's Primary",
  },
]

export function SchoolsTestimonials() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-20 text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What Schools Say
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Hear from schools already delivering the PATI programme
          </p>
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
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {testimonial.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
