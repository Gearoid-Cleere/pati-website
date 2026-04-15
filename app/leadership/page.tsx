import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LeadershipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-secondary/30 py-20 md:py-24">
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

        {/* Richard Hogan */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">

              {/* Image LEFT */}
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/richard-hogan.jpg"
                  alt="Dr. Richard Hogan"
                  width={256}
                  height={256}
                  className="h-64 w-64 rounded-2xl object-cover shadow-sm"
                  priority
                />
              </div>

              {/* Text RIGHT */}
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

        {/* Garry Cleere */}
        <section className="bg-secondary/20 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">

              {/* Text LEFT */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  Programme Leadership
                </p>

                <h2 className="mb-3 font-serif text-3xl font-medium text-primary">
                  Garry Cleere
                </h2>

                <p className="mb-6 text-lg text-muted-foreground">
                  Programme Manager
                </p>

                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Garry Cleere leads the development and delivery of the Parenting and Technology Institute, working closely with schools, organisations, and partners to expand the Institute’s reach and impact.
                  </p>

                  <p>
                    His work focuses on building a trusted platform for families—ensuring that programmes are accessible, practical, and scalable across school communities and organisations.
                  </p>

                  <p>
                    Alongside programme delivery, he supports the Institute’s longer-term development, including partnerships, research initiatives, and the continued growth of its national presence.
                  </p>
                </div>
              </div>

              {/* Image RIGHT */}
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/garry-cleere.jpg"
                  alt="Garry Cleere"
                  width={256}
                  height={256}
                  className="h-64 w-64 rounded-2xl object-cover shadow-sm"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Future Leadership */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-medium text-primary">
              Developing the Institute
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              As the Institute continues to grow, additional leadership capacity will support research, partnerships, programme development, and broader engagement with families, schools, and organisations.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="pb-16 md:pb-20">
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
