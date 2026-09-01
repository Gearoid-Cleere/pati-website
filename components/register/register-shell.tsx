import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function RegisterShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-xl">
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-10">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
