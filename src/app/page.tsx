import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Solution } from "@/components/solution"
import { Tools } from "@/components/tools"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="space-y-6">
      <Header />
      <div className="text-center space-y-6 py-8 md:py-12 lg:py-32 space-x-3 rounded-md border">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4">
          <Image src="/LogoCupMentors.svg" height={70} width={70} alt="logo" />
        </div>
        <h1 className="text-7xl font-bold">
          Cup<span className="font-semibold text-red-600">Mentors</span>
        </h1>
        <h2 className="text-2xl">
          Mentorias para impulsionar o seu conhecimento 🚀
        </h2>
        <Button variant="outline">
          <Link href="#sobre">Faça um tour ☕</Link>

          <ChevronDown className=" ml-2 h-4 w-4" />
        </Button>
        <Button>
          Ir para o discord{" "}
          <Image
            className="ml-2"
            src="/discord.svg"
            height={20}
            width={20}
            alt="/"
          />
        </Button>
      </div>
      <About />
      <Tools />
      <Solution />
      <Footer />
    </main>
  )
}
