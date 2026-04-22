"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
              For Parents
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Parenting in a Digital World Is Not Easy
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Practical, expert-led guidance to help you manage smartphones, gaming, social media, boundaries, and family life with greater confidence at home.
            </p>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Join through your school, or access the programme independently if your school is not yet participating.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              {/* PRIMARY CTA */}
              <Button size="lg" asChild className="shadow-md font-semibold">
                <Link href="/contact">
                  Get PATI in Your School
                </Link>
              </Button>

              {/* SECONDARY CTA */}
              <Button size="lg" variant="outline" asChild>
                <Link href="#modules">
                  See What You’ll Learn
                </Link>
              </Button>

            </div>
          </div>

          {/* RIGHT CONTENT (VIDEO) */}
          <div className="w-full">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              A message for parents from Dr Richard Hogan
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
              Practical support for parents navigating technology, boundaries, and family life.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
