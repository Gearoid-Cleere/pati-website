import { aiProgramme } from "@/lib/programmes"

export function AiProgrammeSchedule() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Live sessions
          </p>
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl">
            Four Tuesday evenings
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Each session is at 7:00pm Ireland time (Europe/Dublin).
          </p>
        </div>

        <ol className="mt-12 space-y-5">
          {aiProgramme.sessions.map((session) => (
            <li
              key={session.when}
              className="rounded-xl border border-border/60 bg-card px-6 py-5"
            >
              <p className="font-medium text-foreground">{session.when}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {session.modules}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
