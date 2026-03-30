const mechItems = [
  { title: "Mapeamento de Campo", text: "O Pêndulo identifica A QUESTAO, A ORIGEM, o buraco ou bloqueio antes mesmo de se tornar físico." },
  { title: "Identificação da Raiz", text: "Diferenciamos o cansaço comum de um bloqueio áurico real e externo." },
  { title: "Intervenção COM PRECISÃO Cirúrgica", text: "Com o Bastão de Cromoterapia, aplicamos a frequência exata logo após a leitura." },
  { title: "Protocolo de Verificação", text: "Re-testamos o campo após o tratamento para confirmar a limpeza e correção." },
];

const MechanismSection = () => {
  return (
    <section className="py-24" style={{ background: "#0e081a" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-[0.7rem] uppercase tracking-widest font-bold inline-block mb-5 border border-foreground/20">
              A Lógica
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">A Lógica do Raio-X Energético</h2>
            <p className="mb-5 text-muted-foreground">
              Tratar sem diagnosticar é negligência com sua própria energia. Nossa metodologia foca na precisão para que o tratamento tenha O MAXIMO de eficácia.
            </p>

            <ul className="list-none space-y-5">
              {mechItems.map((item, i) => (
                <li key={i} className="pl-8 relative">
                  <span className="absolute left-0 text-primary font-bold">→</span>
                  <strong className="text-primary block mb-1">{item.title}</strong>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://rvjqvmzydzcrhqhefrgi.supabase.co/storage/v1/object/public/ai-images/generated/ai-1774123660360-ebae7u.png"
            className="w-full rounded-2xl shadow-[0_0_50px_rgba(74,30,158,0.3)]"
            alt="Energia Aura Técnica Prof. Francisco Borrello"
            loading="lazy"
            decoding="async"
            width="600"
            height="600"
          />
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
