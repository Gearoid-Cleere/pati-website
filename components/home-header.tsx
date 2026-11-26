"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { programmeNavLinks } from "@/lib/programmes"

const navLinks = [
  { href: "/schools", label: "Schools" },
  { href: "/organisations", label: "Organisations" },
  { href: "/parents", label: "Parents" },
  { href: "/about", label: "About" },
]

export function HomeHeader() {
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programmesMobileOpen, setProgrammesMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/pati-logo.jpg"
              alt="Parenting and Technology Institute"
              width={320}
              height={90}
              className="h-12 w-auto lg:h-16"
              priority
            />
          </Link>
          <div className="h-10 w-10 lg:hidden" />
        </div>
      </header>
    )
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/pati-logo.jpg"
              alt="Parenting and Technology Institute"
              width={320}
              height={90}
              className="h-12 w-auto lg:h-16"
              priority
            />
          </Link>

          <nav className="hidden items-center lg:flex">
            <div className="group relative">
              <button className="flex items-center gap-1.5 px-3 py-2 text-[15px] text-muted-foreground transition-colors hover:text-foreground xl:px-4">
                Programmes
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="min-w-[260px] rounded-lg border border-border/60 bg-background p-2 shadow-xl shadow-foreground/5">
                  {programmeNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-md px-4 py-2.5 text-[15px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[15px] text-muted-foreground transition-colors hover:text-foreground xl:px-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Button asChild className="h-11 px-6 text-[15px]">
              <a href="#access">Join PATI</a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-20 z-50 h-[calc(100dvh-5rem)] w-full max-w-[320px] bg-background shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 pt-8">
          <div className="border-b border-border/40">
            <button
              onClick={() => setProgrammesMobileOpen(!programmesMobileOpen)}
              className="flex w-full items-center justify-between py-4 text-[15px] font-medium text-foreground"
            >
              Programmes
              <ChevronRight
                className={`h-4 w-4 text-muted-foreground transition-transform ${
                  programmesMobileOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {programmesMobileOpen && (
              <div className="pb-4 pl-4">
                {programmeNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-border/40 py-4 text-[15px] font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-8">
            <Button className="h-12 w-full text-[15px]" asChild>
              <a href="#access" onClick={() => setMobileOpen(false)}>
                Join PATI
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
