import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/pati-logo.svg"
                alt="Parenting and Technology Institute"
                width={320}
                height={90}
                className="h-14 w-auto lg:h-16"
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Supporting families, schools and organisations to navigate childhood in a digital world with confidence.
            </p>
          </div>

          {/* Who We Help */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Who We Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/schools">For Schools</Link></li>
              <li><Link href="/parents">For Parents</Link></li>
              <li><Link href="/organisations">For Organisations</Link></li>
            </ul>
          </div>

          {/* Programme */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Programme
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/programme">Programme Overview</Link></li>
              <li><Link href="/programme">How It Works</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about">About the Institute</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/advisory-council">Advisory Council</Link></li>
              <li><Link href="/research">Research & Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Parenting and Technology Institute. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
