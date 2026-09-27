import Image from "next/image"
import Link from "next/link"
import { HomeHeader } from "@/components/home-header"
import { Hero } from "@/components/hero"
import { WhyThisMatters } from "@/components/why-this-matters"
import { PathwayCards } from "@/components/pathway-cards"
import { ProgrammeOverview } from "@/components/programme-overview"
import { WhyPatiSection } from "@/components/why-pati-section"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeHeader />

      <main className="flex-1">
        <Hero />

        <WhyThisMatters />

        <PathwayCards />

        <ProgrammeOverview />

        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                  <Image
                    src="/richard-hogan.jpg"
                    alt="Dr Richard Hogan, Family Psychotherapist and Co-Founder of the Parenting and Technology Institute"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 480px, 90vw"
                  />
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
                  Expert Parent Education
                </p>

                <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl">
                  Led by Dr Richard Hogan
                </h2>

                <p className="mt-6 font-serif text-xl font-medium text-foreground">
                  Dr Richard Hogan
                </p>
                <p className="mt-2 text-[15px] text-muted-foreground">
                  Family Psychotherapist and Co-Founder of the Parenting and Technology Institute (PATI)
                </p>

                <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    PATI was founded to help parents make sense of the rapidly changing world their children are growing up in.
                  </p>
                  <p>
                    Led by Dr Richard Hogan, our programmes combine professional expertise with practical, real-world guidance — helping parents understand the challenges around technology, adolescence and family life, and respond with greater confidence.
                  </p>
                </div>

                <div className="mt-10">
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 text-[15px]">
                    <Link href="/about">Learn About PATI</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyPatiSection />

        <Testimonials />

        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}
