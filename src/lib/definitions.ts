export interface Theme {
    name: string
    author: string
    description: string
    colors: Colors
    baseColors: string[]
    homepageUrl: string
    downloads: number;
    rating: number
    lastUpdated: Date
    supportedEditors: string[]
  }

export interface Colors {
      background: string
      foreground: string
      comment: string
      string: string
      variable: string
      function: string
      keyword: string
    }
