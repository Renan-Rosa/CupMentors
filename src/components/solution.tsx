export function Solution() {
  return (
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
            ferramentas de última geração para criar um ambiente de aprendizado
            inigualável. Com base no curso de TI da sua faculdade, nós
            arquitetamos mentorias relacionadas a matérias do seu curso, além de
            conteúdos extras para impulsionar seu conhecimento.
          </p>
        </div>
      </div>
    </section>
  )
}
