import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function SchoolsCta() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.5rem]">
            Ready to Support Your Parent Community?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Join the growing network of schools delivering the PATI programme. Get in touch to learn more about bringing PATI to your school.
          </p>
          
          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary"
              asChild 
              className="h-14 min-w-[200px] px-8 text-[15px] font-medium"
            >
              <Link href="/register-school">
                Register Your School
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild 
              className="h-14 min-w-[200px] border-primary-foreground/30 bg-transparent px-8 text-[15px] font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Book a Call
              </Link>
            </Button>
          </div>
          
          {/* Email option */}
          <div className="mt-10 flex items-center justify-center gap-2 text-primary-foreground/70">
            <Mail className="h-4 w-4" />
            <span className="text-sm">
              Or email us at{" "}
              <a 
                href="mailto:schools@pati.ie" 
                className="font-medium text-primary-foreground underline underline-offset-4 hover:text-primary-foreground/90"
              >
                schools@pati.ie
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
