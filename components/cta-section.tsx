"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, FileText, CheckCircle2 } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Download Pack Section */}
          <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
                  <FileText className="w-4 h-4" />
                  Free Download
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
                  School Information Pack
                </h2>
                <p className="text-muted-foreground mb-6">
                  Everything you need to evaluate PATI for your school — designed for busy school leaders who need to make informed decisions quickly.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Full programme overview with module descriptions</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Clear pricing information</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sample parent communications and promotional materials</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Case studies from Irish primary and secondary schools</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Delivered to your inbox in minutes. No follow-up calls unless you request one.
                </p>
              </div>
              <div className="bg-card p-6 lg:p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-4">Request Your Pack</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Your name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">School email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="j.smith@school.ie"
                    />
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-foreground mb-1.5">School name</label>
                    <input 
                      type="text" 
                      id="school"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Scoil Mhuire National School"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base">
                    Send Me the Pack
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join schools across Ireland delivering expert parent education with minimal effort. Register today and we will handle the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base"
              >
                Register Your School
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground active:bg-primary-foreground/20 font-semibold px-8 py-6 text-base transition-colors"
              >
                Book a Call
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
              <a href="mailto:schools@parentingandtechnologyinstitute.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
                schools@parentingandtechnologyinstitute.com
              </a>
              <a href="tel:+353" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
