import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              About the Institute
            </p>

            <h1 className="mb-6 font-serif text-4xl font-medium text-primary md:text-5xl">
              Supporting Families in a Digital World
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              The Parenting and Technology Institute helps families, schools, and organisations navigate the realities of childhood in an increasingly digital world through expert-led programmes, trusted guidance, and practical support.
            </p>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">

            <div>
              <h2 className="mb-6 font-serif text-3xl font-medium text-primary">
                Why the Institute Exists
              </h2>

              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Technology is now part of everyday childhood. Parents are being asked to navigate challenges that did not exist a generation ago, while schools and organisations are increasingly looking for practical ways to support families.
                </p>

                <p>
                  The Parenting and Technology Institute was created to respond to that need with guidance that is credible, balanced, and grounded in real life.
                </p>

                <p>
                  Our aim is to help families feel more confident, school communities feel more supported, and organisations better understand how digital life is shaping the experience of modern parenting.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8">
              <h3 className="mb-4 font-serif text-2xl font-medium text-primary">
                What makes PATI different
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="mb-1 font-medium text-primary">Research-informed</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Our programmes are shaped by current thinking, emerging issues, and practical insights into family life and childhood today.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-medium text-primary">Clinically grounded</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Led by experienced professionals, our work is grounded in real-world understanding of family dynamics and child development.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-medium text-primary">Practically designed</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Everything we deliver is designed to be usable in everyday life—clear, realistic, and immediately applicable for parents and families.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* What we do */}
        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="mb-6 font-serif text-3xl font-medium text-primary">
                What We Do
              </h2>

              <p className="leading-relaxed text-muted-foreground">
                The Institute delivers structured programmes and practical guidance designed to support families, schools, and organisations in navigating the challenges and opportunities of technology in childhood.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">

              <div className="rounded-2xl border border-border bg-white p-6 text-center">
                <h3 className="mb-3 font-medium text-primary">For Parents</h3>
                <p className="text-sm text-muted-foreground">
                  Practical programmes that help parents set boundaries, understand behaviour, and support their children with confidence.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 text-center">
                <h3 className="mb-3 font-medium text-primary">For Schools</h3>
                <p className="text-sm text-muted-foreground">
                  Structured programmes that support entire school communities with minimal administration and high impact.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 text-center">
                <h3 className="mb-3 font-medium text-primary">For Organisations</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate wellbeing programmes that support employees navigating parenting in a digital world.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Bridge Sections */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3 text-center">

            {/* Leadership */}
            <div>
              <h3 className="mb-4 font-serif text-2xl font-medium text-primary">
                Leadership
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                The Institute is led by experienced voices in family wellbeing, programme delivery, and education.
              </p>
              <Button asChild>
                <Link href="/leadership">View Leadership</Link>
              </Button>
            </div>

            {/* Advisory Council */}
            <div>
              <h3 className="mb-4 font-serif text-2xl font-medium text-primary">
                Advisory Council
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                Our work is supported by an Advisory Council providing insight across psychology, education, and digital life.
              </p>
              <Button asChild>
                <Link href="/advisory-council">View Advisory Council</Link>
              </Button>
            </div>

            {/* Research */}
            <div>
              <h3 className="mb-4 font-serif text-2xl font-medium text-primary">
                Research & Insights
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                We contribute to research and insights that deepen understanding of parenting and technology.
              </p>
              <Button asChild>
                <Link href="/research">View Research</Link>
              </Button>
            </div>

          </div>
        </section>

        {/* Closing */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="leading-relaxed text-muted-foreground">
              The Parenting and Technology Institute continues to grow as a trusted platform for families, schools, and organisations seeking clarity, support, and practical guidance in a rapidly changing digital world.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
