import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="space-y-20">
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

      <section id="sobre">
        <h1 className="text-center text-4xl font-semibold p-5">Quem Somos ?</h1>
        <div className="grid grid-flow-row grid-cols-2 text-center h-72">
          <div className="flex flex-col justify-center p-3 space-y-2 rounded-md border">
            <h2 className="text-2xl font-semibold underline decoration-red-600">
              Nossa missão
            </h2>
            <p className="text-left p-2">
              📌Somos apaixonados por criar um ambiente educacional colaborativo
              e de apoio, especialmente projetado para os desafios únicos
              enfrentados pelos estudantes de Tecnologia. Nossa equipe é
              composta por alunos e especialistas da TI, comprometidos em
              compartilhar conhecimento, fornecer orientação especializada e
              tornar o aprendizado uma experiência acessível e diferenciada.
            </p>
          </div>
          <div className="bg-[url('/room.png')] bg-center bg-contain bg-no-repeat" />
        </div>
      </section>

      <section id="ferramentas">
        <h1 className="text-center text-4xl font-semibold p-5">
          Aprendizado com as ferramentas +Top do mercado.
        </h1>

        <div className="flex justify-between p-4 mx-5 items-center">
          <h1>Notion</h1>
          <div className="w-px h-10 bg-zinc-700" />
          <h1>Discord</h1>
          <div className="w-px h-4 bg-zinc-700" />
          <h1>Whatsapp</h1>
          <div className="w-px h-4 bg-zinc-700" />
          <h1>JetBrains</h1>
        </div>
      </section>

      <section id="solution">
        <h1 className="text-center text-4xl font-semibold p-5">Solução</h1>
        <div className="grid grid-flow-row grid-cols-2 text-center h-72">
          <div className="bg-[url('/room.png')] bg-center bg-contain bg-no-repeat" />
          <div className="flex flex-col justify-center p-3 space-y-2 rounded-md border">
            <h2 className="text-2xl font-semibold underline decoration-red-600">
              Como trabalhamos ?
            </h2>
            <p className="text-left p-2">
              🚀 Nossa abordagem revolucionária combina a expertise humana com
              ferramentas de última geração para criar um ambiente de
              aprendizado inigualável. Com base no curso de TI da sua faculdade,
              nós arquitetamos mentorias relacionadas a matérias do seu curso,
              além de conteúdos extras para impulsionar seu conhecimento.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
