import Holder from "../common/Holder"
import { H2 } from "../ui/Typography"

const NavBar = () => {
  return (
    <header className="min-w-screen fixed top-0 z-10 w-full">
      <Holder className="text-foreground mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12 h-full flex justify-between align-text-bottom bg-[#4B6B5E] dark:bg-[#2D3D35] rounded-full">
        <H2 className="text-white">Editor Themes</H2>

      </Holder>
    </header>
  )
}

export default NavBar
