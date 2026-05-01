const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 5L4.2 7.5L8 3" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="split-bullet">
      <div className="bullet-dot"><CheckIcon /></div>
      {children}
    </div>
  );
}

export default function SplitFeatures() {
  return (
    <section className="section split">
      {/* Row 1 */}
      <div className="split-row">
        <div className="split-text">
          <div className="split-eyebrow">Ficha técnica completa</div>
          <h3 className="split-title">Cada ingrediente tem<br />peso, custo e <em>impacto real</em></h3>
          <p className="split-body">Monte fichas com todos os ingredientes, rendimentos e perdas. A Senhora Ficha calcula o custo exato de cada porção — e recalcula automaticamente quando o preço dos insumos muda.</p>
          <div className="split-bullets">
            <Bullet>Custo por porção calculado em tempo real</Bullet>
            <Bullet>Fator de correção para perda e rendimento</Bullet>
            <Bullet>Sub-receitas dentro de fichas maiores</Bullet>
          </div>
        </div>
        <div className="split-mockup">
          <div className="split-mockup-inner">
            <div style={{ height: "100%", background: "linear-gradient(145deg,#F0FCF7,#E8F5F0)", display: "flex", flexDirection: "column", padding: 24, gap: 14, position: "relative" }}>
              <div style={{ position: "absolute", inset: 12, border: "2px dashed rgba(10,74,57,.1)", borderRadius: 12, pointerEvents: "none" }} />
              <div style={{ background: "white", borderRadius: 12, padding: 16, boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--green-dark)", marginBottom: 12 }}>🍳 Frango ao Molho Pardo — Ficha Técnica</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 0, fontSize: 11, fontWeight: 700, color: "var(--muted)", padding: "0 0 7px", borderBottom: "1px solid #F0EFEB", marginBottom: 6 }}>
                  <span>Ingrediente</span><span>Qtd</span><span style={{ textAlign: "right" }}>Unitário</span><span style={{ textAlign: "right" }}>Total</span>
                </div>
                {[
                  ["Frango (peito)", "300g", "R$5,25/100g", "R$5,25"],
                  ["Cebola",         "80g",  "R$0,55/100g", "R$0,44"],
                  ["Alho",           "20g",  "R$1,80/100g", "R$0,36"],
                  ["Molho shoyu",    "30ml", "R$0,82/100ml","R$0,25"],
                ].map(([name, qty, unit, total]) => (
                  <div key={name} style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 4, fontSize: 11, color: "var(--text)", alignItems: "center", marginBottom: 5 }}>
                    <span>{name}</span>
                    <span style={{ color: "var(--muted)" }}>{qty}</span>
                    <span style={{ textAlign: "right", color: "var(--muted)" }}>{unit}</span>
                    <span style={{ textAlign: "right", fontWeight: 700, color: "var(--green-dark)" }}>{total}</span>
                  </div>
                ))}
                <div style={{ borderTop: "2px solid var(--green-light)", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--green-dark)" }}>Custo total por porção</span>
                  <span style={{ fontSize: 16, fontWeight: 800, color: "var(--green-mid)" }}>R$ 8,42</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="split-row reverse">
        <div className="split-text">
          <div className="split-eyebrow">Controle de ingredientes</div>
          <h3 className="split-title">Um ingrediente atualizado,<br /><em>tudo recalcula</em> sozinho</h3>
          <p className="split-body">Cadastre seus ingredientes uma vez com o preço de compra atual. Quando o fornecedor subir o preço do frango, você atualiza em um lugar — e a Senhora Ficha recalcula o custo de todos os pratos.</p>
          <div className="split-bullets">
            <Bullet>Histórico de variação de preço por ingrediente</Bullet>
            <Bullet>Alerta quando CMV ultrapassar sua meta</Bullet>
            <Bullet>Banco de ingredientes compartilhado entre fichas</Bullet>
          </div>
        </div>
        <div className="split-mockup">
          <div className="split-mockup-inner">
            <div style={{ height: "100%", background: "linear-gradient(145deg,#FAE8F0,#F5D0E2)", display: "flex", flexDirection: "column", padding: 24, gap: 14, position: "relative" }}>
              <div style={{ position: "absolute", inset: 12, border: "2px dashed rgba(218,39,118,.1)", borderRadius: 12, pointerEvents: "none" }} />
              <div style={{ background: "white", borderRadius: 12, padding: 16, boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--green-dark)", marginBottom: 14 }}>📦 Ingredientes Cadastrados</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { name: "🍗 Frango (peito)", uses: "Usado em 7 fichas", price: "R$ 17,50/kg", trend: "↑ +17% vs. mês anterior", trendColor: "#DA2776" },
                    { name: "🥩 Carne moída",    uses: "Usado em 4 fichas", price: "R$ 28,00/kg", trend: "Estável",                  trendColor: "#0F6E56" },
                    { name: "🧀 Queijo minas",   uses: "Usado em 3 fichas", price: "R$ 32,00/kg", trend: "↓ -3%",                    trendColor: "#0F6E56" },
                  ].map((item) => (
                    <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px", background: "#F7F5F0", borderRadius: 8 }}>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--green-dark)" }}>{item.name}</div>
                        <div style={{ fontSize: 11, color: "var(--muted)" }}>{item.uses}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--green-dark)" }}>{item.price}</div>
                        <div style={{ fontSize: 10, fontWeight: 600, color: item.trendColor }}>{item.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
