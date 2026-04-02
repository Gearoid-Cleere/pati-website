import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ResourceCardProps {
  title: string
  description: string
  category: string
  href: string
  featured?: boolean
}

export function ResourceCard({ title, description, category, href, featured = false }: ResourceCardProps) {
  return (
    <Card className={`group h-full border transition-all hover:shadow-md ${featured ? 'border-primary/20 bg-primary/[0.02]' : 'border-border'}`}>
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            {category}
          </span>
        </div>
        <h3 className="mb-3 text-balance text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Read More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
