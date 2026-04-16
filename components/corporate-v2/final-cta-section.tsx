"use client"

import { ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="relative bg-secondary/50 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Join Our Executive Briefing</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A short session for HR and People leaders exploring how organisations can better support working parents in a digital world.
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          Thursday 7 May | 12:30 – 13:15 | Live online
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://us06web.zoom.us/webinar/register/WN_sP_4iBuIS2-4sJzv2P4t5g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
          >
            Join Executive Briefing – Thursday 7 May
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="text-xs text-muted-foreground">
            Free to attend | Limited places
          </p>
        </div>
      </div>
    </section>
  )
}
