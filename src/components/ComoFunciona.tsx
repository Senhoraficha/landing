export default function ComoFunciona() {
  return (
    <section id="como" className="section como">
      <p className="sec-eyebrow">Como funciona</p>
      <h2 className="sec-title">Em menos de 10 minutos<br />você tem o custo real do seu prato</h2>
      <p className="sec-sub">Sem planilha. Sem fórmula. A Senhora Ficha guia cada passo.</p>

      <div className="steps-wrap">
        <div className="steps-connector" />
        <div className="steps">
          {/* Step 1 */}
          <div className="step">
            <div className="step-num-wrap">
              <div className="step-num">1</div>
            </div>
            <div className="step-img">
              <div style={{ width: "85%", background: "rgba(255,255,255,.07)", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,.1)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.5)", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".05em" }}>Novo ingrediente</div>
                <div style={{ background: "rgba(255,255,255,.08)", borderRadius: 7, padding: "10px 12px", marginBottom: 8 }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginBottom: 4 }}>Nome</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.8)" }}>Frango (peito)</div>
                </div>
                <div style={{ background: "rgba(255,255,255,.08)", borderRadius: 7, padding: "10px 12px" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginBottom: 4 }}>Preço de compra</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(159,225,203,.9)" }}>R$ 17,50 / kg</div>
                </div>
              </div>
              <div className="step-img-label">Screenshot do cadastro</div>
            </div>
            <p className="step-title">Cadastre seus ingredientes com o preço de compra atual</p>
            <p className="step-text">Uma vez cadastrado, o ingrediente alimenta todas as fichas que o usam.</p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-num-wrap">
              <div className="step-num">2</div>
            </div>
            <div className="step-img">
              <div style={{ width: "85%", display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ background: "rgba(255,255,255,.08)", borderRadius: "8px 8px 8px 2px", padding: "10px 13px", fontSize: 11, color: "rgba(255,255,255,.8)", fontWeight: 500 }}>Qual o nome da receita?</div>
                <div style={{ background: "rgba(29,158,117,.3)", borderRadius: "8px 8px 2px 8px", padding: "10px 13px", fontSize: 11, color: "rgba(255,255,255,.9)", alignSelf: "flex-end" }}>Frango ao Molho Pardo</div>
                <div style={{ background: "rgba(255,255,255,.08)", borderRadius: "8px 8px 8px 2px", padding: "10px 13px", fontSize: 11, color: "rgba(255,255,255,.8)", fontWeight: 500 }}>Quantas porções rende?</div>
                <div style={{ background: "rgba(29,158,117,.3)", borderRadius: "8px 8px 2px 8px", padding: "10px 13px", fontSize: 11, color: "rgba(255,255,255,.9)", alignSelf: "flex-end" }}>4 porções</div>
              </div>
              <div className="step-img-label">Screenshot do fluxo guiado</div>
            </div>
            <p className="step-title">Monte suas fichas respondendo perguntas simples</p>
            <p className="step-text">Sem fórmula, sem planilha. Só responda e a ficha é montada automaticamente.</p>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="step-num-wrap">
              <div className="step-num">3</div>
            </div>
            <div className="step-img">
              <div style={{ width: "85%", background: "rgba(255,255,255,.07)", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,.1)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.5)", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".05em" }}>Resultado</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
                  <div style={{ background: "rgba(255,255,255,.06)", borderRadius: 8, padding: 10, textAlign: "center" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", marginBottom: 4 }}>Custo/porção</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "rgba(159,225,203,.95)" }}>R$8,42</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,.06)", borderRadius: 8, padding: 10, textAlign: "center" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", marginBottom: 4 }}>CMV</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "rgba(159,225,203,.95)" }}>26%</div>
                  </div>
                </div>
                <div style={{ background: "rgba(218,39,118,.2)", borderRadius: 8, padding: "9px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)", marginBottom: 2 }}>Preço sugerido</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F9B8D4" }}>R$ 28 – R$ 34</div>
                </div>
              </div>
              <div className="step-img-label">Screenshot do resultado</div>
            </div>
            <p className="step-title">Veja o CMV, a margem e o preço sugerido — na hora</p>
            <p className="step-text">Quando o preço do ingrediente muda, você atualiza uma vez. A Senhora Ficha recalcula tudo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
