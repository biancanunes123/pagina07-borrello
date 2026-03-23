const FooterSection = () => {
  return (
    <footer className="py-16 text-center border-t border-foreground/5" style={{ background: "#050208" }}>
      <div className="container">
        <h3 className="text-foreground mb-5">Você vai continuar tratando apenas o sintoma?</h3>
        <p className="text-xs text-muted-foreground/50 mb-2.5">© 2026 Francisco Borrello . Todos os direitos reservados</p>
        <p className="text-xs text-muted-foreground/50">Este conteúdo é educacional e não substitui diagnósticos médicos formais. Combine sempre com acompanhamento profissional.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
