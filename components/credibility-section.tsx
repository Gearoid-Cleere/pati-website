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
            PATI is working with primary and secondary schools across Ireland to support parents navigating technology and family life. Schools include national schools, secondary schools, and Educate Together schools.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">80+</p>
              <p className="text-sm text-muted-foreground mt-1">Schools partnered</p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">15,000+</p>
              <p className="text-sm text-muted-foreground mt-1">Parents reached</p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">94%</p>
              <p className="text-sm text-muted-foreground mt-1">Positive feedback</p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">18+</p>
              <p className="text-sm text-muted-foreground mt-1">Counties supported</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Schools can request further information, including examples of how the programme has been delivered in other school communities.
          </p>
        </div>
      </div>
    </section>
  )
}
