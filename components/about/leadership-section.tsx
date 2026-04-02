export function LeadershipSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Institute Leadership
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Clinical expertise meets world-class programme design
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            PATI is led by a partnership that combines deep clinical insight with proven expertise in building global education programmes. Together, they ensure our work is both therapeutically sound and practically effective.
          </p>
        </div>

        {/* Founder */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-4xl font-semibold text-primary">RH</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-secondary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Founder &amp; Clinical Director
            </p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Dr Richard Hogan
            </h3>

            <div className="mt-8 space-y-4 text-muted-foreground">
              <p>
                Dr Richard Hogan is one of Ireland&apos;s leading family psychotherapists, with over two decades of clinical experience working with families, adolescents, and young adults.
              </p>
              <p>
                Specialising in family systems therapy and adolescent mental health, Dr Hogan has helped thousands of families navigate the complexities of modern parenting—particularly the challenges that arise around technology and digital wellbeing.
              </p>
              <p>
                A recognised public voice on family issues, Dr Hogan regularly contributes to national media, providing expert commentary on parenting, child development, and the impact of technology on young people. His calm, practical approach has made him a trusted resource for families across Ireland and beyond.
              </p>
              <p>
                Dr Hogan founded the Parenting &amp; Technology Institute to translate his clinical insights into accessible, structured programmes that support families, schools, and organisations at scale.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
                20+ Years Clinical Experience
              </span>
              <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
                Family Systems Therapy
              </span>
              <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
                National Media Contributor
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-border" />

        {/* Programme Director */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content - Left side */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Programme Director
            </p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Garry Cleere
            </h3>

            <div className="mt-8 space-y-4 text-muted-foreground">
              <p>
                Garry Cleere brings over 20 years of experience developing global education and certification programmes to the Parenting &amp; Technology Institute.
              </p>
              <p>
                Throughout his career, Garry has been instrumental in building some of the world&apos;s leading education brands, including ICDL, Digital Marketing Institute, UX Design Institute, and Corporate Governance Institute. His work has shaped how millions of learners access structured, high-quality education.
              </p>
              <p>
                Garry&apos;s expertise spans programme design, online learning, accreditation, and assessment. He specialises in creating learning experiences that are both rigorous and practical—ensuring that knowledge translates into real-world application.
              </p>
              <p>
                At PATI, Garry leads the development and delivery of programmes that meet the highest educational standards while remaining accessible to families, schools, and organisations worldwide.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
                20+ Years in Global Education
              </span>
              <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
                Programme Architecture
              </span>
              <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
                Accreditation &amp; Assessment
              </span>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="relative order-1 mx-auto max-w-sm lg:order-2 lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/10">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-secondary/10">
                    <span className="text-4xl font-semibold text-secondary">GC</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
