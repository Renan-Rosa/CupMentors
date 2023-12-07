import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <div className="text-center space-y-6 py-8 md:py-12 lg:py-32 space-x-3 rounded-md border">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4">
          <Image src="/logo.png" height={60} width={60} alt="logo" />
        </div>
        <h1 className="text-7xl font-bold">CupMentor</h1>
        <h2 className="text-2xl">
          Mentorias de TI para impulsionar o seu conhecimento ☕
        </h2>
        <Button variant="outline">
          Faça um tour
          <ChevronRight className=" ml-2 h-4 w-4" />
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
      <section id="ferramentas">
        <h1 className="text-center text-4xl font-semibold p-5">
          Nossas Ferramentas
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

      <section id="sobre">
        <h1 className="text-center text-4xl font-semibold p-5">Quem Somos ?</h1>
        <div className="grid grid-flow-row grid-cols-2 text-center h-72">
          <div className="flex flex-col justify-center p-3 space-y-2">
            <h2 className="text-2xl font-semibold">Nossa missão</h2>
            <p className="text-left">
              Somos apaixonados por criar um ambiente educacional colaborativo e
              de apoio, especialmente projetado para os desafios únicos
              enfrentados pelos estudantes de Tecnologia da Informação. Nossa
              equipe é composta por alunos e especialistas da TI, comprometidos
              em compartilhar conhecimento, fornecer orientação especializada e
              tornar o aprendizado de TI uma experiência acessível e
              empoderadora.
            </p>
          </div>
          <div className="bg-[url('/room.png')] bg-center bg-contain bg-no-repeat" />
          {/* <Image src="/room.png" height={700} width={700} alt="/" /> */}
        </div>
      </section>
    </main>
  )
}
