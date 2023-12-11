export function About() {
  return (
    <section id="sobre">
      <h1 className="text-center text-4xl font-semibold p-5">Quem Somos ?</h1>
      <div className="grid grid-flow-row grid-cols-2 text-center h-72">
        <div className="flex flex-col justify-center p-3 space-y-2 rounded-md border">
          <h2 className="text-2xl font-semibold underline decoration-red-600">
            Nossa missão
          </h2>
          <p className="text-left p-2">
            📌Somos apaixonados por criar um ambiente educacional colaborativo e
            de apoio, especialmente projetado para os desafios únicos
            enfrentados pelos estudantes de Tecnologia. Nossa equipe é composta
            por alunos e especialistas da TI, comprometidos em compartilhar
            conhecimento, fornecer orientação especializada e tornar o
            aprendizado uma experiência acessível e diferenciada.
          </p>
        </div>
        <div className="bg-[url('/room.png')] bg-center bg-contain bg-no-repeat" />
      </div>
    </section>
  )
}
