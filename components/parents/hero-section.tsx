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

          {/* Video */}
          <div className="w-full">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              A message for parents
            </p>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/psmd2WOLVSA"
                  title="Parenting and Technology Institute video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Programme branding has been updated for 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
