import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-balance">
              Parenting in a Digital World
              <br className="hidden sm:block" />
              Has Changed Dramatically
            </span>
          </h1>

          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground lg:mt-8 lg:text-xl">
            <p>
              Technology is reshaping family life — and the effects are increasingly being felt at home, in schools, and in the workplace.
            </p>
            <p>
              The Parenting and Technology Institute supports parents, schools, and organisations through practical guidance, programmes, and support for modern family life.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-12">
            <Button
              size="lg"
              asChild
              className="h-14 min-w-[190px] px-6 text-[15px] font-medium"
            >
              <Link href="/parents">
                Support for Parents
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              asChild
              className="h-14 min-w-[190px] px-6 text-[15px] font-medium"
            >
              <Link href="/schools">
                Support for Schools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              asChild
              className="h-14 min-w-[190px] px-6 text-[15px] font-medium"
            >
              <Link href="/organisations">
                Support for Organisations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
