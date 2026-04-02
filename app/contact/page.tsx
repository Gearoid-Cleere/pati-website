import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, School, Users, Building2, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Contact PATI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              If you would like to learn more about the PATI programme or discuss how it could support your school, organisation, or family, please get in touch.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:pl-8">
                <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  You can also reach us directly using the details below.
                </p>
                <p className="mt-3 text-sm font-medium text-foreground/80">
                  PATI works with schools, parents, and organisations across Ireland to support healthy digital habits in children and families.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a
                        href="mailto:info@parentingandtechnologyinstitute.com"
                        className="mt-1 text-accent transition-colors hover:text-accent/80"
                      >
                        info@parentingandtechnologyinstitute.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Address</h3>
                      <address className="mt-1 not-italic text-muted-foreground">
                        Parenting and Technology Institute (PATI)<br />
                        23 Fitzwilliam Street Upper<br />
                        Dublin<br />
                        D02 DF74<br />
                        Ireland
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Pathways Section */}
        <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                How can we help you?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Choose the pathway that best fits your needs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Schools */}
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Schools</h3>
                <p className="mt-1 text-sm text-muted-foreground/80">
                  Primary and secondary schools across Ireland
                </p>
                <p className="mt-3 text-muted-foreground">
                  Bring the PATI programme to your school and support students and families with evidence-based digital wellbeing education.
                </p>
                <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary">
                  <Link href="/schools" className="inline-flex items-center gap-1">
                    Register Your School
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Parents */}
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Parents</h3>
                <p className="mt-1 text-sm text-muted-foreground/80">
                  Families seeking guidance on digital parenting
                </p>
                <p className="mt-3 text-muted-foreground">
                  Join our programme to gain practical strategies and confidence in guiding your children&apos;s healthy relationship with technology.
                </p>
                <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary">
                  <Link href="/parents" className="inline-flex items-center gap-1">
                    Join the Programme
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Organisations */}
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md sm:col-span-2 lg:col-span-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Organisations</h3>
                <p className="mt-1 text-sm text-muted-foreground/80">
                  Community groups, sports clubs, and youth services
                </p>
                <p className="mt-3 text-muted-foreground">
                  Partner with PATI to support the families in your community with tailored digital wellbeing initiatives.
                </p>
                <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary">
                  <Link href="/organisations" className="inline-flex items-center gap-1">
                    Book a Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Learn more about the PATI Programme
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/programme">Explore Programme</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
              >
                <Link href="/parents">Join as a Parent</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
              >
                <Link href="/schools">Register Your School</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
