export function WhyThisMatters() {
  return (
    <section className="bg-secondary/20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Why This Matters
          </p>

          <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-primary md:text-4xl">
            Families are navigating challenges that previous generations never faced
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Technology has become part of childhood, family life, learning, friendship, entertainment and identity. For many parents, this has created a new kind of pressure — serious, complex and often difficult to manage alone.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The Parenting and Technology Institute exists to help move families, schools and organisations away from noise, fear and overwhelm — and towards calm, evidence-informed guidance that can be applied in real life.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h3 className="mb-3 font-serif text-xl font-medium text-primary">
              No panic
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We recognise the real risks and pressures of digital life without adding fear, judgement or overwhelm.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6">
            <h3 className="mb-3 font-serif text-xl font-medium text-primary">
              No judgement
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Parents and families need support, not blame. Our work is designed to restore confidence and capability.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6">
            <h3 className="mb-3 font-serif text-xl font-medium text-primary">
              Practical guidance
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We translate research, expertise and lived experience into clear guidance for real families, schools and organisations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}