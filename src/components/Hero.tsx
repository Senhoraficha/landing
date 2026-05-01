import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="hero" id="lista">
      <div className="hero-badge">
        <div className="badge-pulse" />
        Beta em breve · vagas limitadas
      </div>

      <h1 className="hero-h1">
        Você sabe o <em>custo real</em>
        <br />
        de cada prato do seu <strong>cardápio?</strong>
      </h1>
      <p className="hero-sub">
        A maioria dos restauranteiros precifica no feeling — e perde margem sem perceber.
        A Senhora Ficha vai mudar isso.
      </p>

      <WaitlistForm />

      <div className="social-proof">
        <div className="avatars">
          <div className="av" style={{ background: "#FAE8F0", color: "#DA2776" }}>CH</div>
          <div className="av" style={{ background: "#E1F5EE", color: "#0F6E56", marginLeft: -8 }}>MR</div>
          <div className="av" style={{ background: "#F3E8FD", color: "#9133EA", marginLeft: -8 }}>JP</div>
          <div className="av" style={{ background: "#FAEEDA", color: "#854F0B", marginLeft: -8 }}>LF</div>
        </div>
        <span className="sp-text"><strong>247 profissionais</strong> já na lista de espera</span>
      </div>

      <div className="hero-mockup-wrap">
        <div className="browser-frame">
          <div className="browser-bar">
            <div className="browser-dots">
              <div className="browser-dot bd-red" />
              <div className="browser-dot bd-yel" />
              <div className="browser-dot bd-grn" />
            </div>
            <div className="browser-url">app.senhoraficha.com.br/dashboard</div>
          </div>
          <div className="browser-screen">
            <div className="mock-sidebar">
              <div className="mock-logo">Senhora Ficha</div>
              <div className="mock-nav-item active"><span className="mock-nav-dot" />Dashboard</div>
              <div className="mock-nav-item"><span className="mock-nav-dot" />Fichas Técnicas</div>
              <div className="mock-nav-item"><span className="mock-nav-dot" />Ingredientes</div>
              <div className="mock-nav-item"><span className="mock-nav-dot" />CMV</div>
              <div className="mock-nav-item"><span className="mock-nav-dot" />Preços</div>
            </div>
            <div className="mock-main">
              <div className="mock-topbar">
                <div className="mock-page-title">Visão Geral do Cardápio</div>
                <div className="mock-btn-sm">+ Nova Ficha</div>
              </div>
              <div className="mock-stats">
                <div className="mock-stat">
                  <div className="mock-stat-label">Fichas Ativas</div>
                  <div className="mock-stat-value">24</div>
                  <div className="mock-stat-sub">↑ 4 este mês</div>
                </div>
                <div className="mock-stat">
                  <div className="mock-stat-label">CMV Médio</div>
                  <div className="mock-stat-value">28%</div>
                  <div className="mock-stat-sub" style={{ color: "#DA2776" }}>Meta: 30%</div>
                </div>
                <div className="mock-stat">
                  <div className="mock-stat-label">Margem Média</div>
                  <div className="mock-stat-value">72%</div>
                  <div className="mock-stat-sub">↑ 6% este mês</div>
                </div>
                <div className="mock-stat">
                  <div className="mock-stat-label">Ingredientes</div>
                  <div className="mock-stat-value">87</div>
                  <div className="mock-stat-sub">3 com alta recente</div>
                </div>
              </div>
              <div className="mock-cards">
                <div className="mock-card">
                  <div className="mock-card-header">
                    <div className="mock-card-title">Frango ao Molho</div>
                    <div className="mock-tag tag-green">Lucro alto</div>
                  </div>
                  <div className="mock-card-row"><span>Custo total</span><strong>R$ 8,42</strong></div>
                  <div className="mock-card-row"><span>Preço de venda</span><strong>R$ 32,00</strong></div>
                  <div className="mock-card-row"><span>CMV</span><strong style={{ color: "#0F6E56" }}>26%</strong></div>
                  <div className="mock-bar-wrap"><div className="mock-bar" style={{ width: "26%", background: "var(--green-mid)" }} /></div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-header">
                    <div className="mock-card-title">Bolo de Cenoura</div>
                    <div className="mock-tag tag-pink">Revisar preço</div>
                  </div>
                  <div className="mock-card-row"><span>Custo total</span><strong>R$ 14,80</strong></div>
                  <div className="mock-card-row"><span>Preço de venda</span><strong>R$ 38,00</strong></div>
                  <div className="mock-card-row"><span>CMV</span><strong style={{ color: "#DA2776" }}>39%</strong></div>
                  <div className="mock-bar-wrap"><div className="mock-bar" style={{ width: "39%", background: "#DA2776" }} /></div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-header">
                    <div className="mock-card-title">Marmita Fitness</div>
                    <div className="mock-tag tag-amber">Ok</div>
                  </div>
                  <div className="mock-card-row"><span>Custo total</span><strong>R$ 9,10</strong></div>
                  <div className="mock-card-row"><span>Preço de venda</span><strong>R$ 29,90</strong></div>
                  <div className="mock-card-row"><span>CMV</span><strong style={{ color: "#854F0B" }}>30%</strong></div>
                  <div className="mock-bar-wrap"><div className="mock-bar" style={{ width: "30%", background: "#F59E0B" }} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
