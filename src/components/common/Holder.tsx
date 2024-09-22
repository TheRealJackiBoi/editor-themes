import { cn } from "@/lib/utils"

const Holder = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  )
}

export default Holder
