import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { ChevronUp } from "lucide-react"

export function Footer() {
  return (
    <section id="contato">
      <div className="flex-col p-4 justify-center items-center">
        <h1 className="w-full text-3xl font-bold flex">
          Cup<span className="font-semibold text-red-600">Mentors</span>
          <Image src="/LogoCupMentors.svg" height={30} width={30} alt="logo" />
        </h1>
        <p className="py-4">
          Junte-se à nossa comunidade de aprendizado em Tecnologia da
          Informação. Siga-nos nas redes sociais para ficar por dentro das
          últimas atualizações, dicas exclusivas e participar de discussões
          envolventes. Estamos ansiosos para compartilhar o conhecimento e a
          inspiração com você. Vamos crescer juntos! 🚀
        </p>
        <div className=" flex flex-rows justify-between ">
          <div>
            <Button variant="ghost">
              {" "}
              <Link href="/" target="_blank">
                <Image src="/discord.svg" alt="Logo" width={20} height={20} />
              </Link>
            </Button>
            <Button variant="ghost">
              <Link href="/" target="_blank">
                <Image src="/github.svg" alt="Logo" width={20} height={20} />
              </Link>
            </Button>
            <Button variant="ghost">
              {" "}
              <Link href="/" target="_blank">
                <Image src="/insta.svg" alt="Logo" width={20} height={20} />
              </Link>
            </Button>
          </div>
          <Button variant="ghost">
            {" "}
            <Link href="/" className="flex">
              Retornar Home <ChevronUp className="mt-0.5 ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="justify-center h-px bg-zinc-700 my-3" />
      <p className="text-center">
        ©{new Date().getFullYear()} Lancer. Todos os direitos reservados.{" "}
      </p>
    </section>
  )
}
