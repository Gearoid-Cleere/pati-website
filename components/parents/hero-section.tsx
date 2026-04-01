import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Practical Guidance for Parenting in a Digital World
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Learn how to support your child with smartphones, gaming, social
              media, boundaries, and healthy technology use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="shadow-md">
                <Link href="#join">Join the Programme</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#modules">Explore What You&apos;ll Learn</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
            <Image
              src="/images/hero-family.jpg"
              alt="Parent and child using technology together"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
