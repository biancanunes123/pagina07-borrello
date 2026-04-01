const HeroSection = () => {
  return (
    <section className="py-20 pb-16 text-center" style={{ background: "radial-gradient(circle at center, #1a0b35 0%, hsl(270, 50%, 4%) 100%)" }}>
      <div className="container">
        <p className="text-sm text-primary font-semibold mb-6">
          Prof. Francisco Borrello . +10.000 alunos formados . Especialista em Radiônica e Radiestesia
        </p>

        <h1 className="text-4xl md:text-6xl leading-tight mb-8 max-w-[900px] mx-auto text-foreground">
          Pare de Tratar Sintomas <span className="text-primary italic">Sem Conhecer a Raiz do Problema</span>
        </h1>

        <span className="text-xl text-primary mb-6 font-bold block max-w-[800px] mx-auto">
          Onde o DIAGNÓSTICO encontra o TRATAMENTO técnico
        </span>

        <a
          href="https://pay.hotmart.com/Q104997284V?off=0dk6j0qn"
          className="inline-block bg-gradient-to-br from-primary to-[#f1d592] text-primary-foreground py-5 px-10 rounded-lg font-extrabold text-lg uppercase w-full max-w-[650px] shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(212,175,55,0.4)] transition-transform no-underline text-center mb-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUERO DIAGNOSTICAR E TRATAR MEU CAMPO R$77
          <span className="block text-xs mt-2 opacity-80 tracking-wider font-semibold text-primary-foreground">
            Vagas limitadas . Evento ao vivo 06/04 . Sem replay gratuito
          </span>
        </a>

        <p className="text-lg text-muted-foreground max-w-[850px] mx-auto mb-10">
          O pêndulo e o bastão de cromoterapia não são simples ferramentas de equilíbrio. São instrumentos de <strong className="text-foreground">diagnóstico e tratamento de alta precisão</strong> como um exame de imagem para o seu campo áurico, permitindo o tratamento assertivo na sequência.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-primary/20 py-5">
          {[
            { label: "Onde?", value: "Online ao Vivo" },
            { label: "Quando?", value: "06 de Abril" },
            { label: "Duração", value: "3h de Prática" },
            { label: "Nível", value: "Sem Exp. Prévia" },
          ].map((item, i) => (
            <div key={i} className="text-sm font-bold uppercase text-foreground md:border-r last:border-r-0 border-foreground/10">
              <span className="block text-primary text-xs">{item.label}</span>
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
