"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ResourceCard } from "@/components/resource-card"
import { CategoryFilter } from "@/components/category-filter"
import { DownloadCard } from "@/components/download-card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const featuredResources = [
  {
    title: "Managing Screen Time: A Practical Guide",
    description:
      "Evidence-based strategies for establishing healthy screen time boundaries with your children, from toddlers to teenagers.",
    category: "Screen Time",
    href: "/resources/managing-screen-time",
  },
  {
    title: "Gaming and Boundaries",
    description:
      "Understanding the gaming landscape and how to set appropriate limits while maintaining a positive relationship with your child.",
    category: "Gaming",
    href: "/resources/gaming-and-boundaries",
  },
  {
    title: "Social Media and Anxiety",
    description:
      "Exploring the connection between social media use and mental health, with practical steps for supporting young people.",
    category: "Social Media & Anxiety",
    href: "/resources/social-media-and-anxiety",
  },
  {
    title: "First Smartphone Readiness",
    description:
      "A comprehensive framework for deciding when your child is ready for their first smartphone and how to introduce it responsibly.",
    category: "Devices & Smartphones",
    href: "/resources/first-smartphone-readiness",
  },
]

const allResources = [
  {
    title: "Digital Citizenship in the Classroom",
    description:
      "Teaching responsible online behaviour and critical thinking skills to students of all ages.",
    category: "Online Safety",
    href: "/resources/digital-citizenship",
  },
  {
    title: "Age-Appropriate Device Guidelines",
    description:
      "When and how to introduce different devices and platforms based on developmental stages.",
    category: "Devices & Smartphones",
    href: "/resources/age-appropriate-devices",
  },
  {
    title: "Understanding Online Gaming Culture",
    description:
      "A guide for parents on popular games, in-game purchases, and online interactions.",
    category: "Gaming",
    href: "/resources/online-gaming-culture",
  },
  {
    title: "Cyberbullying Prevention and Response",
    description:
      "Recognising the signs and taking effective action when cyberbullying occurs.",
    category: "Online Safety",
    href: "/resources/cyberbullying-prevention",
  },
  {
    title: "Setting Effective Screen Limits",
    description:
      "Practical approaches to establishing and maintaining healthy screen time routines.",
    category: "Screen Time",
    href: "/resources/setting-screen-limits",
  },
  {
    title: "Instagram and Teen Mental Health",
    description:
      "What the research tells us about social media use and adolescent wellbeing.",
    category: "Social Media & Anxiety",
    href: "/resources/instagram-teen-mental-health",
  },
  {
    title: "Family Media Agreements",
    description:
      "Creating effective household rules around technology use that the whole family can follow.",
    category: "Boundaries",
    href: "/resources/family-media-agreements",
  },
  {
    title: "Tablet and iPad Guidelines",
    description:
      "Best practices for introducing tablets to children and setting appropriate boundaries.",
    category: "Devices & Smartphones",
    href: "/resources/tablet-guidelines",
  },
  {
    title: "Establishing Tech-Free Zones",
    description:
      "How to create healthy boundaries around device use in your home.",
    category: "Boundaries",
    href: "/resources/tech-free-zones",
  },
]

const categories = [
  "Screen Time",
  "Gaming",
  "Social Media & Anxiety",
  "Online Safety",
  "Boundaries",
  "Devices & Smartphones",
]

const downloadableGuides = [
  {
    title: "Parent Guide",
    description:
      "A practical guide for parents navigating technology with their children.",
    downloadHref: "/parents",
  },
  {
    title: "School Information Pack",
    description:
      "Everything schools need to know about bringing PATI to their community.",
    downloadHref: "/contact",
  },
  {
    title: "Corporate Overview",
    description:
      "How PATI supports organisations in creating family-friendly wellbeing support.",
    downloadHref: "/contact",
  },
]

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredResources =
    activeCategory === "All"
      ? allResources
      : allResources.filter((resource) => resource.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Resources
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Practical guidance and insights to support families, schools, and organisations in navigating childhood and technology.
              </p>
              <p className="mt-4 text-base text-muted-foreground/80">
                A curated collection of practical guidance developed through the PATI programme.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Featured Guidance
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Start here. These are essential resources that provide foundational understanding of the key topics families face today.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.title} {...resource} featured />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Browse by Topic
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Explore our complete library of guidance organised by subject area.
              </p>
            </div>

            <div className="mb-8">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  No resources found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Downloadable Guides
              </h2>
              <p className="mt-2 text-muted-foreground">
                In-depth resources and overviews available to explore
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {downloadableGuides.map((guide) => (
                <DownloadCard key={guide.title} {...guide} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Explore the PATI Programme
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Join our community and access comprehensive support for navigating technology with confidence.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link href="/parents">
                    Join as a Parent
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                >
                  <Link href="/schools">Register Your School</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                >
                  <Link href="/organisations">Corporate Enquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
