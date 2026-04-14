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

            <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-6">
              Leadership at the Parenting and Technology Institute
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
              The Parenting and Technology Institute is led by experienced voices in family wellbeing, education, and programme development—bringing together trusted expertise and a practical understanding of the challenges facing parents today.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] items-start">
              <div className="mx-auto lg:mx-0">
                <div className="aspect-square w-64 rounded-2xl bg-muted" />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  Programme Lead
                </p>

                <h2 className="font-serif text-3xl font-medium text-primary mb-3">
                  Dr. Richard Hogan
                </h2>

                <p className="text-lg text-muted-foreground mb-6">
                  Family Psychotherapist, Author, and Lead Expert
                </p>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Richard Hogan brings deep expertise in adolescent behaviour, family dynamics, and the realities facing parents in a fast-changing digital world.
                  </p>

                  <p>
                    His work helps shape the Parenting and Technology Institute’s programme direction, ensuring that guidance for families is practical, trusted, and grounded in lived experience.
                  </p>

                  <p>
                    Through his clinical work, public speaking, and ongoing engagement with parents and schools, he has become a recognised voice in the national conversation around parenting and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <h2 className="font-serif text-3xl font-medium text-primary mb-6">
                Institute Leadership
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Alongside programme expertise, the Institute is supported by leadership focused on growth, partnerships, school engagement, and the development of a trusted national platform for families.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="mb-4 h-16 w-16 rounded-full bg-muted" />
                <h3 className="text-xl font-medium text-primary mb-2">
                  Garry Cleere
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Programme Manager
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Supports the development and delivery of the Parenting and Technology Institute, with a focus on partnerships, school engagement, programme growth, and building the Institute’s long-term platform and reach.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="mb-4 h-16 w-16 rounded-full bg-muted" />
                <h3 className="text-xl font-medium text-primary mb-2">
                  Growing Leadership Team
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Future Appointments
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As the Institute grows, additional leadership capacity will support research, partnerships, programme development, and wider engagement with schools, families, and organisations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
