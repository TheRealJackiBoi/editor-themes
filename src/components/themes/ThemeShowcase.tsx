import { Theme } from "@/lib/definitions"
import ThemeCard from "./ThemeCard"


// Updated mock data for themes
const themes: Theme[] = [
  {
    name: "Monokai Pro",
    author: "Monokai",
    description: "A modern, elegant, and carefully designed color scheme for code editors and terminal emulators.",
    colors: {
      background: "#2D2A2E",
      foreground: "#FCFCFA",
      comment: "#727072",
      string: "#FFD866",
      variable: "#FF6188",
      function: "#A9DC76",
      keyword: "#FC9867",
    },
    baseColors: ["#FF6188", "#FC9867", "#FFD866", "#A9DC76", "#78DCE8"],
    homepageUrl: "https://monokai.pro/",
    downloads: 1000000,
    rating: 4.8,
    lastUpdated: new Date("2023-05-15"),
    supportedEditors: ["VS Code", "Sublime Text", "Atom"]
  },
  {
    name: "Dracula",
    author: "Zeno Rocha",
    description: "A dark theme for many editors, shells, and more. Known for its vibrant colors and ease on the eyes.",
    colors: {
      background: "#282A36",
      foreground: "#F8F8F2",
      comment: "#6272A4",
      string: "#F1FA8C",
      variable: "#BD93F9",
      function: "#50FA7B",
      keyword: "#FF79C6",
    },
    baseColors: ["#BD93F9", "#FF79C6", "#50FA7B", "#FFB86C", "#8BE9FD"],
    homepageUrl: "https://draculatheme.com/",
    downloads: 2000000,
    rating: 4.9,
    lastUpdated: new Date("2023-06-01"),
    supportedEditors: ["VS Code", "IntelliJ", "Vim", "Emacs"]
  },
  {
    name: "Nord",
    author: "Arctic Ice Studio",
    description: "An arctic, north-bluish color palette. Clean and elegant design for a pleasant coding experience.",
    colors: {
      background: "#2E3440",
      foreground: "#D8DEE9",
      comment: "#4C566A",
      string: "#A3BE8C",
      variable: "#5E81AC",
      function: "#88C0D0",
      keyword: "#81A1C1",
    },
    baseColors: ["#8FBCBB", "#88C0D0", "#81A1C1", "#5E81AC", "#ECEFF4"],
    homepageUrl: "https://www.nordtheme.com/",
    downloads: 800000,
    rating: 4.7,
    lastUpdated: new Date("2023-04-20"),
    supportedEditors: ["VS Code", "JetBrains IDEs", "Atom"]
  }
]


export default function ThemeShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Editor Theme Showcase</h1>
        </div>
      </header>
      <main className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {themes.map((theme, index) => (
            <ThemeCard key={index} theme={theme}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
