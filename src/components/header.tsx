import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function Header() {
  const slideBarStyle =
    "hover:border-b-[1px] border-transparent after:transition-all duration-300 relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-red-600 hover:after:w-1/2"
  return (
    <div className="flex items-center justify-between border-red-700">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white flex">
          Cup<span className="font-semibold text-red-600">Mentors</span>
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <Link href="/" className={slideBarStyle}>
          Home
        </Link>
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="#sobre" className={slideBarStyle}>
          Sobre
        </Link>
        <Link href="#ferramentas" className={slideBarStyle}>
          Ferramentas
        </Link>
        <Link href="#contato" className={slideBarStyle}>
          Contato
        </Link>
        <div className="w-px h-4 bg-zinc-700" />
        <Button variant="secondary">
          <Link href="/login">Login</Link>
        </Button>
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          by <span className="font-extralight">Lancer</span>
          <div className="w-px h-4 bg-zinc-700" />
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
