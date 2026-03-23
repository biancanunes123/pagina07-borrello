const FastStats = () => {
  const stats = [
    { value: "10k+", label: "alunos formados" },
    { value: "240k", label: "seguidores" },
    { value: "3h", label: "prática ao vivo" },
    { value: "04/04", label: "Data do evento" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-around bg-card p-8 rounded-2xl -mt-8 relative z-10 border border-foreground/5 gap-5 md:gap-0">
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <strong className="block text-2xl text-primary">{s.value}</strong>
          <span className="text-xs uppercase text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FastStats;
