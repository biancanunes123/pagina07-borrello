const blocks = [
  {
    tag: "Etapa 01",
    title: "Diagnóstico técnico",
    items: ["Como a aura se organiza em camadas", "Desequilíbrios que precedem doenças físicas", "Relação entre chakras e estados emocionais"],
  },
  {
    tag: "Etapa 02",
    title: "O Pêndulo na Prática",
    items: ["Como calibrar e usar para leitura áurica", "Protocolo: Bloqueios", "Demonstração de leitura técnica em tempo real"],
  },
  {
    tag: "Etapa 03",
    title: "Bastão de Cromoterapia",
    items: ["Potencializando o tratamento áurico", "Repondo frequências de cores necessárias", "Protocolo integrado em 15 minutos"],
  },
];

const CurriculumSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl border-b-2 border-primary inline-block pb-2.5 mb-5">Cronograma 04/04</h2>
          <p className="text-muted-foreground">Mapeamento sistemático focado em Diagnóstico + Tratamento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blocks.map((block, i) => (
            <div key={i} className="bg-card p-10 rounded-2xl border border-foreground/5">
              <span className="text-primary font-extrabold text-xs uppercase tracking-[2px] block mb-4">{block.tag}</span>
              <h3 className="mb-5 text-xl border-b border-primary/30 pb-2.5">{block.title}</h3>
              <ul className="list-none text-sm text-muted-foreground space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="border-b border-foreground/[0.03] pb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#ingresso"
            className="inline-block bg-gradient-to-br from-primary to-[#f1d592] text-primary-foreground py-5 px-10 rounded-lg font-extrabold text-lg uppercase w-full max-w-[650px] shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(212,175,55,0.4)] transition-all no-underline text-center"
          >
            GARANTIR MEU ACESSO AO MÉTODO COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
