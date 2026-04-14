import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AdvisoryCouncilPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">

            {/* Intro */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Advisory Council
              </p>

              <h1 className="mb-6 font-serif text-3xl font-medium text-primary md:text-4xl">
                Guided by Leading Experts in Childhood and Technology
              </h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                The Parenting and Technology Institute is supported by an Advisory Council of experts across psychology, education, and digital life—helping to ensure that our programmes remain grounded in real-world experience, trusted insight, and the evolving needs of families and schools.
              </p>
            </div>

            {/* Purpose */}
            <div className="mx-auto mb-16 max-w-4xl">
              <h2 className="mb-4 text-center font-serif text-2xl font-medium text-primary">
                Purpose
              </h2>

              <p className="text-center leading-relaxed text-muted-foreground">
                The Advisory Council supports the Institute in shaping programme content, responding to emerging challenges, and maintaining a balanced, practical, and child-focused approach to technology. It brings together perspectives from across family wellbeing, education, digital safety, and research to help ensure that the Institute’s work remains relevant, credible, and useful to the communities it serves.
              </p>
            </div>

            {/* Core Responsibilities */}
            <div className="mx-auto mb-20 max-w-4xl rounded-2xl border border-border bg-secondary/20 p-8 md:p-10">
              <h2 className="mb-6 text-center font-serif text-2xl font-medium text-primary">
                Core Responsibilities
              </h2>

              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Reviewing programme content and learning structure to support clarity, relevance, and practical value for families, schools, and organisations.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Providing insight into emerging issues such as social media, gaming, online behaviour, and the evolving role of technology in childhood.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Supporting a consistent, evidence-informed approach across programme delivery and Institute initiatives.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Contributing to research, insights, and thought leadership that inform how families and schools respond to digital life.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Helping ensure that all guidance remains balanced, ethical, and focused on the wellbeing of children and young people.
                  </span>
                </li>
              </ul>
            </div>

            {/* Who Serves */}
            <div className="mb-20">
              <h2 className="mb-12 text-center font-serif text-2xl font-medium text-primary">
                Who Serves on the Advisory Council
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="mb-2 font-medium text-primary">
                    Psychology & Child Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Experts in adolescent behaviour, family dynamics, emotional wellbeing, and the developmental needs of children and young people.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="mb-2 font-medium text-primary">
                    Education
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    School leaders and educators with direct experience of supporting children, parents, and school communities in everyday practice.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="mb-2 font-medium text-primary">
                    Digital & Online Safety
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Specialists in cyber safety, online behaviour, safeguarding, and the risks and opportunities presented by digital platforms.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="mb-2 font-medium text-primary">
                    Research & Academia
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Researchers whose work helps deepen understanding of childhood, parenting, technology, and modern family life.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="mb-2 font-medium text-primary">
                    Technology & Society
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Voices exploring how technology is shaping behaviour, relationships, learning, and wellbeing across home, school, and society.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="mb-2 font-medium text-primary">
                    Parent & Community Perspective
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Trusted perspectives that reflect the real concerns, questions, and lived experiences of families navigating digital life.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="leading-relaxed text-muted-foreground">
                As the Institute continues to grow, the Advisory Council remains an important source of guidance and perspective—helping to ensure that our work stays relevant, responsible, and trusted by families, schools, and organisations.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
