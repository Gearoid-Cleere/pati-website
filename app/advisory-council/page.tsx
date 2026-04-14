import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AdvisoryCouncilPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Advisory Council
              </p>

              <h1 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">
                Guided by Leading Experts in Childhood and Technology
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The Parenting and Technology Institute is supported by an independent Advisory Council of experts across psychology, education, and digital life—ensuring our programmes are grounded in real-world experience and trusted insight.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 mb-20">
              <div>
                <h2 className="font-serif text-xl font-medium text-primary mb-4">
                  Purpose
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Advisory Council provides independent guidance on programme content, emerging challenges, and best practice—helping families, schools, and organisations navigate childhood in a rapidly changing digital world.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-primary mb-4">
                  Core Responsibilities
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Reviewing programme content across all modules (M1–M8)</li>
                  <li>Providing insight into emerging issues such as social media, gaming, and AI</li>
                  <li>Supporting research and thought leadership initiatives</li>
                  <li>Advising on practical strategies for families and schools</li>
                  <li>Ensuring a balanced, ethical, child-focused approach to technology</li>
                </ul>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-serif text-2xl font-medium text-primary text-center mb-12">
                Who Serves on the Advisory Council
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h3 className="font-medium text-primary mb-2">
                    Psychology & Child Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Experts in adolescent behaviour, family dynamics, and emotional wellbeing
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-2">
                    Education
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    School leaders and educators supporting children and parents every day
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-2">
                    Digital & Online Safety
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Specialists in cyber safety, online behaviour, and emerging risks
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-2">
                    Research & Academia
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Researchers focused on childhood, technology, and modern family life
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-2">
                    Technology & Society
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Voices exploring how technology shapes behaviour and relationships
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-2">
                    Parent & Community Perspective
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Trusted voices reflecting the real experiences of families
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground leading-relaxed">
                The Advisory Council provides independent perspective and meets periodically to review programme direction and emerging challenges—ensuring that everything we deliver remains relevant, practical, and trusted by families and schools.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
