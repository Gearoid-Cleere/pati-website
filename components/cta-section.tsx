"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, FileText, CheckCircle2 } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Information Pack Section */}
          <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
                  <FileText className="w-4 h-4" />
                  Information Pack
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
                  Request the School Information Pack
                </h2>

                <p className="text-muted-foreground mb-6">
                  Everything you need to evaluate PATI for your school, including programme overview, pricing, and sample materials.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Full programme overview and module structure</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Clear school and parent pricing information</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sample parent communications and promotional materials</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Examples of how the programme works for schools</span>
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground">
                  A simple next step for schools who want to review the programme in more detail.
                </p>
              </div>

              <div className="bg-card p-6 lg:p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-4">
                  Get the Pack
                </h3>

                <p className="text-muted-foreground mb-6">
                  Request the information pack or get in touch to discuss how PATI could work for your school community.
                </p>

                <div className="flex flex-col gap-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
                  >
                    <Link href="/contact">
                      Request Information Pack
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full font-semibold py-6 text-base"
                  >
                    <Link href="/contact">
                      Express Interest
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Explore PATI for Your School?
            </h2>

            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join schools across Ireland supporting parents with expert-led guidance, practical resources, and a low-effort delivery model.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base"
              >
                <Link href="/contact">
                  Express Interest
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground active:bg-primary-foreground/20 font-semibold px-8 py-6 text-base transition-colors"
              >
                <Link href="/contact">
                  Request Information Pack
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:schools@parentingandtechnologyinstitute.com"
                className="hover:text-primary-foreground transition-colors"
              >
                schools@parentingandtechnologyinstitute.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
