import Link from "next/link"
import Logo from "./logo"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav className={cn("h-20 sticky top-0", isScrolled ? "bg-white border-b" : "bg-primary/10 ")}>
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Logo />
          </Link>
          <div className="gap-4 text-muted-foreground text-sm hidden lg:flex">
            <Link href="/">How does it work ?</Link>
            <Link href="/">About Us</Link>
          </div>
        </div>
        <div>
          <Button asChild>
            <Link href="">Join Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
