import { Download, ExternalLink, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ThemeNavigations = ({homePage, name}: {homePage: string, name: string}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline">
        <Link href={`/${name}`} target="_blank" rel="noopener noreferrer">
        <Eye className="mr-2 h-4 w-4" />
        View Details
        </Link>
      </Button>
      <Button asChild>
        <a href={homePage} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Homepage
        </a>
      </Button>
      <Button variant="secondary">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  )
}

export default ThemeNavigations
