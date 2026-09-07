import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProgrammeAccess() {
  return (
    <section id="access" className="scroll-mt-24 bg-background pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Choose How to Access
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Parents can join independently. Schools and organisations register first; their
            communities then access the programme at the associated rate.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm lg:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
              Independent Parent
            </p>
            <p className="mt-5 font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
              €79.95
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              For parents joining PATI directly. This is the open public route into the programme.
            </p>
            <Button
              size="lg"
              asChild
              className="mt-8 h-auto min-h-14 w-full min-w-0 whitespace-normal px-4 py-3 text-center text-[15px] font-medium leading-snug"
            >
              <Link href="/register/parent">
                <span className="min-w-0">
                  Join Independently <span className="whitespace-nowrap">· €79.95</span>
                </span>
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-border/40 bg-secondary/20 p-8 lg:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
              Registered School
            </p>
            <p className="mt-5 font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
              €499.95
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Annual School Registration</p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Your school&apos;s registration with PATI for the year. Payment is made as a single
              checkout.
            </p>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="mt-8 h-auto min-h-14 w-full min-w-0 whitespace-normal px-4 py-3 text-center text-[15px] font-medium leading-snug"
            >
              <Link href="/register/school">
                <span className="min-w-0">
                  Register Your School <span className="whitespace-nowrap">· €499.95</span>
                </span>
              </Link>
            </Button>
            <div className="mt-8 rounded-xl border border-primary/50 bg-primary/10 p-5">
              <p className="text-sm font-medium text-foreground">Already at a registered school?</p>
              <p className="mt-3 font-serif text-3xl font-normal tracking-tight text-foreground">
                €14.95
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                For parents whose school is already registered with PATI.
              </p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="mt-5 h-auto min-h-14 w-full min-w-0 whitespace-normal border-primary/50 bg-primary/15 px-4 py-3 text-center text-[15px] font-medium leading-snug text-foreground shadow-none hover:bg-primary/20 hover:text-foreground"
              >
                <Link href="/register/school-parent">
                  <span className="min-w-0">
                    Access Through Your School <span className="whitespace-nowrap">· €14.95</span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/40 bg-secondary/20 p-8 lg:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
              Organisation
            </p>
            <p className="mt-5 font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
              €999.95
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Organisation Registration</p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              After an organisation registers, PATI provides it with a private participant access
              link. Associated participants then register through that organisation for €24.95
              each.
            </p>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="mt-8 h-auto min-h-14 w-full min-w-0 whitespace-normal px-4 py-3 text-center text-[15px] font-medium leading-snug"
            >
              <Link href="/register/organisation">
                <span className="min-w-0">
                  Register Your Organisation <span className="whitespace-nowrap">· €999.95</span>
                </span>
              </Link>
            </Button>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Participant access is arranged through the organisation&apos;s private link. There is
              no public organisation-user registration page.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
