import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LeadershipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Leadership
            </p>

            <h1 className="mb-6 font-serif text-4xl font-medium text-primary md:text-5xl">
              Leadership at the Parenting and Technology Institute
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              The Parenting and Technology Institute is led by experienced voices in family wellbeing, education, and programme development—bringing together trusted expertise, practical leadership, and a clear understanding of the challenges facing parents, schools, and organisations today.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="mx-auto lg:mx-0">
                <div className="aspect-square w-64 rounded-2xl bg-muted" />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  Lead Expert
                </p>

                <h2 className="mb-3 font-serif text-3xl font-medium text-primary">
                  Dr. Richard Hogan
                </h2>

                <p className="mb-6 text-lg text-muted-foreground">
                  Family Psychotherapist, Author, and Lead Expert
                </p>

                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Dr. Richard Hogan is a widely recognised voice in the areas of adolescent wellbeing, family dynamics, and the realities facing parents in a fast-changing digital world.
                  </p>

                  <p>
                    His expertise helps shape the Parenting and Technology Institute’s programme direction, ensuring that guidance for families is practical, credible, and grounded in both professional experience and lived reality.
                  </p>

                  <p>
                    Through his clinical work, writing, public speaking, and ongoing engagement with parents and schools, he brings a depth of insight that has made him a trusted contributor to the national conversation on parenting and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="mb-6 font-serif text-3xl font-medium text-primary">
                Institute Leadership
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Alongside programme expertise, the Institute is supported by leadership focused on growth, partnerships, school engagement, and the continued development of a trusted platform for families, schools, and organisations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="mb-4 h-16 w-16 rounded-full bg-muted" />
                <h3 className="mb-2 text-xl font-medium text-primary">
                  Garry Cleere
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Programme Manager
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Garry Cleere supports the development and delivery of the Parenting and Technology Institute, with a focus on partnerships, school engagement, programme growth, and the wider development of the Institute’s platform, reach, and long-term impact.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="mb-4 h-16 w-16 rounded-full bg-muted" />
                <h3 className="mb-2 text-xl font-medium text-primary">
                  Growing Leadership Team
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Future Appointments
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  As the Institute continues to grow, additional leadership capacity will support research, partnerships, programme development, and broader engagement with families, schools, and organisations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="leading-relaxed text-muted-foreground">
              Together, the Institute’s leadership brings clinical expertise, programme development, and a strong commitment to helping families navigate childhood in a digital world with greater clarity and confidence.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
