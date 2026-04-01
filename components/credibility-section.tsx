import { GraduationCap } from "lucide-react"

export function CredibilitySection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-6">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            Trusted by a Growing Network of Schools
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            PATI is delivering parent education across primary and secondary schools throughout Ireland. Our network includes national schools, secondary schools, and Educate Together schools.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Schools partnered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">5,000+</p>
              <p className="text-sm text-muted-foreground mt-1">Parents reached</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">94%</p>
              <p className="text-sm text-muted-foreground mt-1">Would recommend</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground mt-1">Average rating</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Request our information pack to see case studies and testimonials from schools like yours.
          </p>
        </div>
      </div>
    </section>
  )
}
