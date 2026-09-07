import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OrganisationsExpertise() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="/richard-hogan.jpg"
                alt="Dr Richard Hogan, Family Psychotherapist and Co-Founder of the Parenting and Technology Institute"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 90vw"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl">
              Expert-Led Parent Education
            </h2>

            <p className="mt-6 font-serif text-xl font-medium text-foreground">Dr Richard Hogan</p>
            <p className="mt-2 text-[15px] text-muted-foreground">
              Family Psychotherapist and Co-Founder of the Parenting &amp; Technology Institute
            </p>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                PATI brings professional expertise together with a structured educational approach to
                help parents make sense of the challenges emerging around technology and family life.
              </p>
              <p>
                The programme is designed to provide parents with practical understanding and
                approaches they can apply in their own families.
              </p>
            </div>

            <div className="mt-10">
              <Button size="lg" variant="outline" asChild className="h-12 px-8 text-[15px]">
                <Link href="/about">Learn About PATI</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
