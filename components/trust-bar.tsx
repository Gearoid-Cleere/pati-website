export function TrustBar() {
  const trustLogos = [
    "School Partner",
    "Education Trust",
    "Parent Network",
    "Corporate Alliance",
  ]

  return (
    <section className="border-y border-border/40 bg-muted/30 py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <p className="mb-10 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
          Trusted by leading schools and organisations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 lg:gap-x-20">
          {trustLogos.map((logo, index) => (
            <div
              key={index}
              className="flex h-8 items-center justify-center"
            >
              <span className="text-sm font-medium tracking-wide text-muted-foreground/40">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
