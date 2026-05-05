"use client";
import { useWaitlist } from "@/context/WaitlistContext";

const APP_URL = "https://app.senhoraficha.com.br"; // TODO: atualizar com URL real

export default function Hero() {
  const { open } = useWaitlist();

  return (
    <section className="hero" id="inicio">
      <div className="hero-badge">
        <div className="badge-pulse" />
        Plano grátis disponível · sem cartão
      </div>

      <h1 className="hero-h1">
        Saiba o <em>custo real</em> de cada prato em 5 minutos — e pare de perder <strong>dinheiro sem perceber.</strong>
      </h1>
      <p className="hero-sub">
        Fichas técnicas, CMV e preço de venda automáticos.
        Sem planilha, sem fórmula, sem complicação.
      </p>

      <div className="hero-form-wrap" style={{ marginBottom: 14, gap: 12 }}>
        <a href={APP_URL} className="btn btn-primary btn-loud btn-lg">
          Criar conta grátis
        </a>
        <a href="#pricing" className="btn btn-secondary btn-ghost btn-lg">
          Ver planos
        </a>
      </div>
      <p className="hero-hint">Gratuito para sempre no plano básico. Sem cartão de crédito.</p>

      <div className="social-proof">
        <div className="avatars">
          <div className="av" style={{ background: "#FAE8F0", color: "#DA2776" }}>CH</div>
          <div className="av" style={{ background: "#E1F5EE", color: "#0F6E56", marginLeft: -8 }}>MR</div>
          <div className="av" style={{ background: "#F3E8FD", color: "#9133EA", marginLeft: -8 }}>JP</div>
          <div className="av" style={{ background: "#FAEEDA", color: "#854F0B", marginLeft: -8 }}>LF</div>
        </div>
        <span className="sp-text"><strong>247 profissionais</strong> já usando a plataforma</span>
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
                {[
                  { label: "Fichas Ativas", value: "24", sub: "↑ 4 este mês", subColor: "var(--green-mid)" },
                  { label: "CMV Médio", value: "28%", sub: "Meta: 30%", subColor: "#DA2776" },
                  { label: "Margem Média", value: "72%", sub: "↑ 6% este mês", subColor: "var(--green-mid)" },
                  { label: "Ingredientes", value: "87", sub: "3 com alta recente", subColor: "var(--green-mid)" },
                ].map((s) => (
                  <div key={s.label} className="mock-stat">
                    <div className="mock-stat-label">{s.label}</div>
                    <div className="mock-stat-value">{s.value}</div>
                    <div className="mock-stat-sub" style={{ color: s.subColor }}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mock-cards">
                {[
                  { name: "Frango ao Molho", tag: "Lucro alto", tagClass: "tag-green", cost: "R$ 8,42", price: "R$ 32,00", cmv: "26%", cmvColor: "#0F6E56", barW: "26%", barColor: "var(--green-mid)" },
                  { name: "Bolo de Cenoura", tag: "Revisar preço", tagClass: "tag-pink", cost: "R$ 14,80", price: "R$ 38,00", cmv: "39%", cmvColor: "#DA2776", barW: "39%", barColor: "#DA2776" },
                  { name: "Marmita Fitness", tag: "Ok", tagClass: "tag-amber", cost: "R$ 9,10", price: "R$ 29,90", cmv: "30%", cmvColor: "#854F0B", barW: "30%", barColor: "#F59E0B" },
                ].map((c) => (
                  <div key={c.name} className="mock-card">
                    <div className="mock-card-header">
                      <div className="mock-card-title">{c.name}</div>
                      <div className={`mock-tag ${c.tagClass}`}>{c.tag}</div>
                    </div>
                    <div className="mock-card-row"><span>Custo total</span><strong>{c.cost}</strong></div>
                    <div className="mock-card-row"><span>Preço de venda</span><strong>{c.price}</strong></div>
                    <div className="mock-card-row"><span>CMV</span><strong style={{ color: c.cmvColor }}>{c.cmv}</strong></div>
                    <div className="mock-bar-wrap"><div className="mock-bar" style={{ width: c.barW, background: c.barColor }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
