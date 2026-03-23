const signals = [
  { title: "Diagnóstico Cego", text: "Muitos buscam meditação para ansiedade quando o problema PODE SER, BLOQUEIO, ENTRADA OU vazamento de energia no CHAKRA DO plexo solar detectável apenas com radiestesia técnica." },
  { title: "Cura Paliativa", text: "Tratar o sintoma ignorando a CAUSA faz com que o alívio seja passageiro. O bloqueio áurico permanece e o problema sempre retorna." },
  { title: "Instrumentação Técnica", text: "O pêndulo atua como o seu sensor clínico. Ele traz a clareza para saber exatamente o que precisa ser tratado primeiro, SEM CHETES OU ACHISMOS." },
  { title: "A Sequência do Sucesso", text: "Primeiro diagnosticamos a falha no campo. Imediatamente aplicamos o tratamento específico com o Bastão Cromático para correção." },
];

const SignalsSection = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-[0.7rem] uppercase tracking-widest font-bold inline-block mb-5 border border-foreground/20">
          A Raiz Energética
        </span>
        <h2 className="text-3xl md:text-4xl border-b-2 border-primary inline-block pb-2.5 mb-5">
          Sinais de Campo Bloqueado
        </h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Seu Corpo fala. Mas sem a Ferramenta Certa, Você Só Ouve Ruídos. Esses padrões indicam que o campo está enviando sinais que nenhum exame convencional capta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {signals.map((s, i) => (
          <div key={i} className="bg-foreground/[0.03] p-8 rounded-xl border-l-4 border-l-secondary">
            <h4 className="text-primary mb-2.5 font-sans text-lg uppercase font-bold">{s.title}</h4>
            <p className="text-[0.95rem] text-muted-foreground">{s.text}</p>
          </div>
        ))}
        <div className="md:col-span-2 bg-foreground/[0.03] p-8 rounded-xl border-l-4 border-l-secondary">
          <h4 className="text-primary mb-2.5 font-sans text-lg uppercase font-bold">O Olhar Clínico do Francisco Borrello</h4>
          <p className="text-[0.95rem] text-muted-foreground">
            Nesta aula, o Professor ensinará você a parar de chutar o que está sentindo. Você sairá com o protocolo completo: Identificação Técnica da Raiz e a Intervenção de Equilíbrio correta para cada tipo de bloqueio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignalsSection;
