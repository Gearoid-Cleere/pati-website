"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.04),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Executive Briefing for HR & People Leaders
            </p>

            <h1 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Employee Stress Doesn’t Start at Work — It Starts at Home
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Children’s use of smartphones, gaming, and social media is creating real pressure for families — and increasingly impacting employee focus, stress, and wellbeing at work.
            </p>

            <p className="mt-3 text-base text-muted-foreground">
              A short, practical executive briefing for HR and People leaders.
            </p>

            <div className="mt-8 flex flex-col items-start">

              <Button asChild size="lg" className="h-14 gap-2 px-8 text-base font-semibold shadow-lg">
                <a
                  href="https://us06web.zoom.us/webinar/register/WN_sP_4iBuIS2-4sJzv2P4t5g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for Executive Briefing
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <p className="mt-3 text-sm text-muted-foreground">
                Thursday 21st May at 2:00pm | Live online
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Free to attend | Limited places
              </p>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">

                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-10 w-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>

                  <p className="text-sm font-medium text-muted-foreground">
                    Supporting employees and families in a digital world
                  </p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
