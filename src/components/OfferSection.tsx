const OfferSection = () => {
  return (
    <section id="ingresso" className="py-24">
      <div className="container">
        <div className="max-w-[900px] mx-auto rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
          {/* Left side */}
          <div className="flex-[1.3] p-10 md:p-16 bg-foreground text-primary-foreground">
            <span className="bg-success text-foreground px-4 py-1.5 rounded-full text-[0.7rem] uppercase tracking-widest font-bold inline-block mb-5 border border-foreground/20">
              Super Aula ao Vivo
            </span>
            <h2 className="text-3xl mb-8 text-background">Cure a causa de forma técnica</h2>
            <ul className="list-none mb-8 space-y-0">
              <li className="flex justify-between py-3 border-b border-dashed border-background/30 font-semibold text-background">
                Super Aula: Leia Sua Aura (Prática) <span className="line-through text-background/50">R$ 297</span>
              </li>
            </ul>
            
          </div>

          {/* Right side */}
          <div className="flex-1 bg-background text-foreground p-10 md:p-16 text-center border-l border-border">
            <p className="uppercase text-xs mb-2.5">Por apenas</p>
            <div className="text-6xl font-black text-primary leading-none">
              <span className="text-xl text-foreground">R$</span>47
            </div>
            <span className="text-lg my-4 block opacity-80">
              ou 9x de <strong className="text-2xl text-primary">R$ 8,56</strong>
            </span>
            <a
              href="https://pay.hotmart.com/Q104997284V?off=0dk6j0qn"
              className="inline-block bg-gradient-to-br from-primary to-[#f1d592] text-primary-foreground py-5 px-10 rounded-lg font-extrabold text-base uppercase w-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(212,175,55,0.4)] transition-all no-underline text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUERO MEU INGRESSO AGORA
            </a>
            <p className="text-[0.7rem] mt-4 opacity-70">Evento ao Vivo 06/04 . Sem Replay Gratuito</p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm opacity-80">
          🛡 <strong>Garantia incondicional de 7 dias.</strong>
        </p>
      </div>
    </section>
  );
};

export default OfferSection;
