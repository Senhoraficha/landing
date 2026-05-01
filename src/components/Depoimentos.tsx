const testimonials = [
  {
    text: '"Descobri que estava vendendo meu bolo de cenoura abaixo do custo. Em 10 minutos a Senhora Ficha me mostrou o preço certo. Reajustei e em um mês recuperei o que perdi em meses."',
    initials: "CM", bg: "#FAE8F0", color: "#DA2776",
    name: "Carolina M.", role: "Confeiteira — São Paulo",
  },
  {
    text: '"Tentei planilha três vezes e sempre parei de atualizar. Com a Senhora Ficha, atualizei o preço do frango em 30 segundos e vi o impacto em todo o cardápio na hora."',
    initials: "RB", bg: "#E1F5EE", color: "#0F6E56",
    name: "Roberto B.", role: "Dono de restaurante — Belo Horizonte",
  },
  {
    text: '"Finalmente entendi o que é CMV. Não preciso ser financeiro para usar. A plataforma guia tudo. Meu delivery virou lucro de verdade."',
    initials: "TL", bg: "#FAEEDA", color: "#854F0B",
    name: "Tatiana L.", role: "Marmiteira — Porto Alegre",
  },
];

export default function Depoimentos() {
  return (
    <section className="section depoimentos">
      <p className="sec-eyebrow">Primeiros feedbacks</p>
      <h2 className="sec-title">Quem já testou, <em>não volta</em> pra planilha</h2>
      <p className="sec-sub">Depoimentos de profissionais que participaram da fase de testes.</p>
      <div className="dep-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="dep-card">
            <div className="dep-stars">★★★★★</div>
            <p className="dep-text">{t.text}</p>
            <div className="dep-author">
              <div className="dep-av" style={{ background: t.bg, color: t.color }}>{t.initials}</div>
              <div>
                <div className="dep-name">{t.name}</div>
                <div className="dep-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
