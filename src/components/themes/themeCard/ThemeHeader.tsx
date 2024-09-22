import { H2, Muted } from "../../ui/Typography"

const ThemeHeader = ({name, author}: {name: string, author: string}) => {
  return (
    <div>
      <H2 className="text-2xl font-bold -pb-2">{name}</H2>
      <Muted>by {author}</Muted>
    </div>
  )
}

export default ThemeHeader
