import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface DownloadCardProps {
  title: string
  description: string
  downloadHref: string
}

export function DownloadCard({ title, description, downloadHref }: DownloadCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
          <p className="mb-3 text-sm text-muted-foreground">{description}</p>
          <Button variant="outline" size="sm" asChild>
            <a href={downloadHref} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
