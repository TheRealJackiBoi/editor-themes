import { Theme } from "@/lib/definitions"
import { Card, CardContent } from "@/components/ui/card"
import CodeSnippet from "@/components/themes/themeCard/CodeSnippet"
import Rating from "@/components/common/Rating"
import ThemeHeader from "@/components/themes/themeCard/ThemeHeader"
import ThemeSupportedEditors from "@/components/themes/themeCard/ThemeSupportedEditors"
import ThemeBaseColors from "@/components/themes/themeCard/ThemeBaseColors"
import { Paragraph } from "@/components/ui/Typography"
import ThemeNavigations from "@/components/themes/themeCard/ThemeNavigations"

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
                    <Paragraph className="text-sm mb-4">{theme.description}</Paragraph>
                    <ThemeBaseColors colors={theme.baseColors}/>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <ThemeSupportedEditors editors={theme.supportedEditors} />
                      <div>
                        <p><span className="font-medium"><b>Downloads:</b></span> {theme.downloads.toLocaleString()}</p>
                        <p><span className="font-medium"><b>Last Updated:</b></span> {`${theme.lastUpdated.getMonth()} / ${theme.lastUpdated.getDate()} / ${theme.lastUpdated.getFullYear()}`}</p>
                      </div>
                    </div>
                    <ThemeNavigations name={theme.name} homePage={theme.homepageUrl} />
                  </CardContent>
                </div>
              </Card>
  )
}

export default ThemeCard
