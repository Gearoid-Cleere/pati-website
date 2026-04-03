export function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-3xl font-semibold text-primary">RH</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Dr Richard Hogan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Delivered by Dr Richard Hogan
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                {"Dr Richard Hogan is a family psychotherapist and one of Ireland's leading voices on parenting in the digital age."}
              </p>
              <p>
                He works directly with families, schools, and organisations, and is a regular media contributor on parenting, adolescence, and wellbeing.
              </p>
              <p>
                His approach is practical, evidence-informed, and grounded in real-life experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
