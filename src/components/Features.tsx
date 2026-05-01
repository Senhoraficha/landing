const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 5L4.2 7.5L8 3" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Features() {
  return (
    <section id="features" className="section features">
      <p className="sec-eyebrow">O que a Senhora Ficha faz</p>
      <h2 className="sec-title">Ficha técnica que<br />trabalha por você</h2>
      <p className="sec-sub">Sem planilha, sem fórmula, sem conhecimento técnico. Só resultados.</p>

      <div className="bento-grid">
        {/* Card A — Gestão visual do cardápio */}
        <div className="bento-card bento-a">
          <div className="bento-body">
            <span className="bento-tag" style={{ background: "var(--green-light)", color: "#0F6E56" }}>Diferencial</span>
            <div className="bento-title">Gestão visual do cardápio</div>
            <div className="bento-text">Veja todos os pratos, custos e margens numa tela só. Identifique de relance quais pratos geram lucro e quais precisam de ajuste.</div>
          </div>
          <div className="bento-img bento-img-tall">
            <div className="img-placeholder theme-green">
              <div className="dashed-frame" />
              <div style={{ width: "85%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, zIndex: 1 }}>
                {[
                  { name: "Frango ao Molho", cmv: "26%", color: "#0F6E56", bg: "#E8F5F0", bar: "var(--green-mid)", w: "26%" },
                  { name: "Bolo Cenoura",    cmv: "39%", color: "#DA2776", bg: "#FAE8F0", bar: "#DA2776",          w: "39%" },
                  { name: "Marmita Fitness", cmv: "30%", color: "#854F0B", bg: "#FAEEDA", bar: "#F59E0B",          w: "30%" },
                  { name: "Risoto Cogumelos",cmv: "24%", color: "#0F6E56", bg: "#E8F5F0", bar: "var(--green-mid)", w: "24%" },
                ].map((item) => (
                  <div key={item.name} style={{ background: "white", borderRadius: 10, padding: 12, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "var(--green-dark)", marginBottom: 6 }}>{item.name}</div>
                    <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 4 }}>CMV: <b style={{ color: item.color }}>{item.cmv}</b></div>
                    <div style={{ height: 4, background: item.bg, borderRadius: 99 }}>
                      <div style={{ height: "100%", width: item.w, background: item.bar, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card B — CMV em tempo real */}
        <div className="bento-card bento-b">
          <div className="bento-body">
            <span className="bento-tag" style={{ background: "var(--pink-light)", color: "var(--pink)" }}>Exclusivo</span>
            <div className="bento-title">CMV em tempo real</div>
            <div className="bento-text">Atualizou o preço do frango? Todas as fichas que usam frango atualizam junto automaticamente.</div>
          </div>
          <div className="bento-img">
            <div className="img-placeholder theme-pink">
              <div className="dashed-frame" />
              <div style={{ width: "80%", background: "white", borderRadius: 12, padding: 16, boxShadow: "0 4px 16px rgba(218,39,118,.12)", zIndex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".05em" }}>Ingrediente atualizado</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "var(--green-dark)", fontWeight: 600 }}>🍗 Frango (kg)</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 12, color: "#9E9C94", textDecoration: "line-through" }}>R$ 14,90</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#DA2776" }}>R$ 17,50</span>
                  </div>
                </div>
                <div style={{ height: 1, background: "#F0EFEB", marginBottom: 8 }} />
                <div style={{ fontSize: 11, color: "#0F6E56", fontWeight: 600 }}>↺ 7 fichas recalculadas automaticamente</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card C — Sugestão de preço */}
        <div className="bento-card bento-c">
          <div className="bento-body">
            <span className="bento-tag" style={{ background: "#F3E8FD", color: "#9133EA" }}>Diferencial</span>
            <div className="bento-title">Sugestão de preço de venda</div>
            <div className="bento-text">Uma faixa baseada na sua margem real, com e sem delivery.</div>
          </div>
          <div className="bento-img bento-img-short">
            <div className="img-placeholder theme-amber">
              <div className="dashed-frame" />
              <div style={{ width: "80%", background: "white", borderRadius: 10, padding: 14, boxShadow: "0 2px 12px rgba(245,158,11,.15)", zIndex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 8 }}>Preço sugerido</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: "var(--muted)" }}>Salão / balcão</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--green-dark)" }}>R$ 28–34</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, color: "var(--muted)" }}>Com delivery (15%)</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#DA2776" }}>R$ 33–40</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card D — Sem conhecimento técnico */}
        <div className="bento-card bento-d">
          <div className="bento-body">
            <span className="bento-tag" style={{ background: "#FAEEDA", color: "#854F0B" }}>Simples</span>
            <div className="bento-title">Sem conhecimento técnico</div>
            <div className="bento-text">Você responde perguntas. A Senhora Ficha monta a ficha.</div>
          </div>
          <div className="bento-img bento-img-short">
            <div className="img-placeholder theme-mint">
              <div className="dashed-frame" />
              <div style={{ width: "82%", display: "flex", flexDirection: "column", gap: 7, zIndex: 1 }}>
                <div style={{ background: "white", borderRadius: "8px 8px 8px 2px", padding: "9px 12px", fontSize: 11, color: "var(--green-dark)", fontWeight: 500, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>Qual o nome da receita?</div>
                <div style={{ background: "var(--green-dark)", borderRadius: "8px 8px 2px 8px", padding: "9px 12px", fontSize: 11, color: "white", alignSelf: "flex-end" }}>Frango ao Molho Pardo</div>
                <div style={{ background: "white", borderRadius: "8px 8px 8px 2px", padding: "9px 12px", fontSize: 11, color: "var(--green-dark)", fontWeight: 500, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>Quantas porções rende?</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card E — Alertas de margem */}
        <div className="bento-card bento-e">
          <div className="bento-body">
            <span className="bento-tag" style={{ background: "var(--green-light)", color: "#0F6E56" }}>Automático</span>
            <div className="bento-title">Alertas de margem</div>
            <div className="bento-text">Aviso imediato quando um prato sai da zona de lucro segura.</div>
          </div>
          <div className="bento-img bento-img-short">
            <div className="img-placeholder theme-green">
              <div className="dashed-frame" />
              <div style={{ width: "82%", background: "white", borderRadius: 10, padding: 14, boxShadow: "0 2px 10px rgba(0,0,0,.06)", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#DA2776", flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#DA2776" }}>Alerta de margem</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.5 }}>Bolo de Cenoura ultrapassou<br />o CMV máximo (39% › 30%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
