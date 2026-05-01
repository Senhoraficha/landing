const profiles = [
  { cls: "pv1", emoji: "🍽️", label: "Restaurantes e Bares",    sub: "Controle de cardápio completo com alertas de margem em tempo real", tag: "Cardápio completo" },
  { cls: "pv2", emoji: "🛵", label: "Delivery e Food Trucks",  sub: "Custo por canal — salão, app e WhatsApp com margens diferentes",    tag: "Multicanal" },
  { cls: "pv3", emoji: "🍰", label: "Confeiteiras e Boleiras", sub: "Ficha por receita com custo exato por porção, fatia ou unidade",     tag: "Por porção" },
  { cls: "pv4", emoji: "🥡", label: "Marmiteiros",             sub: "Custo exato antes de vender cada marmita — sem surpresas no fim",   tag: "Custo por unidade" },
  { cls: "pv5", emoji: "👨‍🍳", label: "Chefs Profissionais",    sub: "Fichas técnicas completas e precisas para operações que não param", tag: "Alta precisão" },
];

export default function ParaQuem() {
  return (
    <section id="quem" className="section quem-v3">
      <p className="sec-eyebrow">Para quem é</p>
      <h2 className="sec-title">Se você trabalha com comida,<br />é para você</h2>
      <p className="sec-sub">Não importa o tamanho do negócio — o que importa é que cada prato gere lucro.</p>
      <div className="profiles-vibrant">
        {profiles.map((p) => (
          <div key={p.label} className={`profile-v ${p.cls}`}>
            <div className="profile-emoji">{p.emoji}</div>
            <div className="profile-label">{p.label}</div>
            <div className="profile-sub">{p.sub}</div>
            <div className="profile-tag">{p.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
