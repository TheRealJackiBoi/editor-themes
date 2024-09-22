import { Theme } from "@/lib/definitions"
import { Card, CardContent } from "../ui/card"
import CodeSnippet from "./CodeSnippet"
import { Badge, Download, ExternalLink, Eye } from "lucide-react"
import { Button } from "../ui/button"
import Rating from "./Rating"
import ThemeHeader from "./ThemeHeader"
import ThemeSupportedEditors from "./ThemeSupportedEditors"
import ThemeBaseColors from "./ThemeBaseColors"

const ThemeCard = ({theme}: {theme: Theme}) => {
  return (
              <Card className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 aspect-square">
                    <CodeSnippet colors={theme.colors} />
                  </div>
                  <CardContent className="sm:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <ThemeHeader name={theme.name} author={theme.author}/>
                      <Rating rating={theme.rating} />
                    </div>
                    <p className="text-sm mb-4">{theme.description}</p>
                    <ThemeBaseColors colors={theme.baseColors}/>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <ThemeSupportedEditors editors={theme.supportedEditors} />
                      <div>
                        <p><span className="font-medium">Downloads:</span> {theme.downloads.toLocaleString()}</p>
                        <p><span className="font-medium">Last Updated:</span> {theme.lastUpdated.toTimeString()}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button asChild>
                        <a href={theme.homepageUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Homepage
                        </a>
                      </Button>
                      <Button variant="secondary">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
  )
}

export default ThemeCard
