import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const expertiseAreas = [
  {
    title: "Clinical Psychology",
    description:
      "Expertise in adolescent wellbeing, emotional development, family dynamics, and the psychological impact of technology on children and young people.",
  },
  {
    title: "Education Leadership",
    description:
      "School leaders and educators with direct experience supporting children, parents, and school communities in everyday practice.",
  },
  {
    title: "Child Development",
    description:
      "Specialist perspectives on the developmental needs of children and young people as they grow up in a technology-rich world.",
  },
  {
    title: "Digital Wellbeing & Online Safety",
    description:
      "Insight into online behaviour, digital boundaries, cyber safety, safeguarding, and the opportunities and risks of digital platforms.",
  },
  {
    title: "Corporate Wellbeing",
    description:
      "Perspectives on how family pressures, parenting challenges, and technology-related stress can affect employees and organisations.",
  },
  {
    title: "Academic Research",
    description:
      "Research-informed perspectives that help deepen understanding of parenting, childhood, technology, and modern family life.",
  },
  {
    title: "Parent & Community Voice",
    description:
      "Grounded perspectives reflecting the real concerns, questions, and lived experiences of families navigating digital life.",
  },
  {
    title: "Technology, Ethics & Society",
    description:
      "Broader insight into how technology is shaping behaviour, relationships, learning, wellbeing, and society.",
  },
]

const featuredMembers = [
  {
    name: "Dr Richard Hogan",
    title: "Family Psychotherapist & Co-Founder",
    image: "/richard-hogan.jpg",
    bio:
      "Richard is a family psychotherapist and widely recognised voice on adolescent wellbeing, parenting, and the impact of technology on children and family life.",
  },
  {
    name: "Garry Cleere",
    title: "Programme Director & Co-Founder",
    image: "/garry-cleere.jpg",
    bio:
      "Garry works across education, institutional development, and programme strategy, supporting the Institute’s mission to deliver practical guidance for families, schools, and organisations.",
  },
{
  name: "Dr James Trimble",
  title: "Education Leader & Advisory Contributor",
  image: "/james-trimble.jpg",
  bio:
    "James is an experienced education leader and Principal of a community college in Wexford, bringing valuable perspective on school leadership, student wellbeing, and the practical challenges facing school communities in the digital age.",
},]

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
                A Multidisciplinary Advisory Council Guiding the Institute’s Mission
              </h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                The Parenting and Technology Institute is establishing an International Advisory Council bringing together expertise across psychology, education, child development, digital wellbeing, research, and organisational life.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The Council supports our mission to help families, schools, organisations, and communities navigate technology in modern life with greater clarity, confidence, and care.
              </p>
            </div>

            {/* Purpose */}
            <div className="mx-auto mb-16 max-w-4xl">
              <h2 className="mb-4 text-center font-serif text-2xl font-medium text-primary">
                Purpose
              </h2>

              <p className="text-center leading-relaxed text-muted-foreground">
                The Advisory Council provides guidance, perspective, and multidisciplinary insight as the Institute develops programmes, research, and practical supports for families, schools, and organisations. Its role is to help ensure that our work remains balanced, evidence-informed, ethical, and grounded in real-world experience.
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
                    Providing perspective on emerging challenges affecting children, families, schools, and organisations in a rapidly changing digital world.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Reviewing programme themes and learning structures to support clarity, relevance, and practical value.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Supporting a consistent, evidence-informed approach across Institute programmes, resources, and public-facing initiatives.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Contributing to research, insights, and thought leadership on parenting, technology, wellbeing, and modern family life.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    Helping ensure that guidance remains responsible, ethical, practical, and focused on the wellbeing of children and young people.
                  </span>
                </li>
              </ul>
            </div>

            {/* Expertise Areas */}
            <div className="mb-20">
              <h2 className="mb-4 text-center font-serif text-2xl font-medium text-primary">
                Areas of Expertise
              </h2>

              <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed text-muted-foreground">
                The Council is being assembled to reflect the multidisciplinary nature of the challenges families and organisations now face.
              </p>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {expertiseAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-2xl border border-border bg-white p-6"
                  >
                    <h3 className="mb-2 font-medium text-primary">
                      {area.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Members */}
            <div className="mb-20">
              <h2 className="mb-4 text-center font-serif text-2xl font-medium text-primary">
                Founding Advisory Contributors
              </h2>

              <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed text-muted-foreground">
                The Council will continue to expand progressively, bringing together leading voices committed to supporting healthier relationships between children, families, and technology.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {featuredMembers.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-2xl border border-border bg-white p-6 text-center"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto mb-5 h-28 w-28 rounded-full object-cover"
                    />

                    <h3 className="mb-1 font-medium text-primary">
                      {member.name}
                    </h3>

                    <p className="mb-4 text-sm text-muted-foreground">
                      {member.title}
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="leading-relaxed text-muted-foreground">
                As the Parenting and Technology Institute continues to expand its work across families, schools, organisations, and communities, the Advisory Council remains an important source of guidance, perspective, and multidisciplinary expertise. Additional council members and contributors will be announced progressively.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
