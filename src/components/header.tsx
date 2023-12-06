import { Github } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

export function Header() {
  const slideBarStyle =
    "hover:border-b-[1px] border-transparent after:transition-all duration-300 relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-red-600 hover:after:w-1/2"
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Houston
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <Link href="/about" className={slideBarStyle}>
          About
        </Link>
        <Link href="/solution" className={slideBarStyle}>
          Soluções
        </Link>
        <Link href="/plus" className={slideBarStyle}>
          Plus+
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Link href="/" target="_blank">
              <Image src="/github.svg" alt="Logo" width={20} height={20} />
            </Link>
          </Button>
          <div className="w-px h-4 bg-zinc-700" />
          <Button variant="outline">
            <Link href="/" target="_blank">
              <Image src="/discord.svg" alt="Logo" width={20} height={20} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
