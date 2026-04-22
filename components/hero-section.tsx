"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent" />
              For Schools
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
              Expert Parent Education, Delivered for Your School Community
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
              PATI delivers practical, expert-led sessions on technology and family life directly to your parents. Led by Dr Richard Hogan, the programme supports families navigating smartphones, gaming, and social media — while keeping things simple for schools.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-xl">
              We handle everything. Your staff simply share the invite.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Live online sessions delivered by a leading family expert</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Recordings available for parents who cannot attend</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>All communications and resources provided to the school</span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              {/* PRIMARY CTA */}
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
              >
                <Link href="/contact">
                  Express Interest
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              {/* SECONDARY CTA */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 px-6 py-6 text-base"
              >
                <Link href="/contact">
                  Request Information Pack
                </Link>
              </Button>

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl bg-primary p-8 lg:p-10 text-primary-foreground">

              <p className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/70 mb-6">
                Trusted by schools across Ireland
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold">80+</p>
                  <p className="text-sm text-primary-foreground/80">Schools partnered</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">15,000+</p>
                  <p className="text-sm text-primary-foreground/80">Parents reached</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">94%</p>
                  <p className="text-sm text-primary-foreground/80">Positive feedback</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">18+</p>
                  <p className="text-sm text-primary-foreground/80">Counties supported</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
             <p className="text-sm text-primary-foreground/90 italic">
  {"It reassured me that our approach was on the right track and made me feel much more confident as a parent."}
</p>
<p className="text-sm font-medium mt-2 text-primary-foreground/70">
  — Aoife, Letterfrack National School
</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
