import Link from "next/link";

const APP_URL = "https://app.senhoraficha.com.br"; // TODO: atualizar com URL real

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <span className="cta-pill">Grátis para sempre no plano básico</span>
      <h2 className="sec-title">Sua próxima ficha técnica<br />em menos de 5 minutos.</h2>
      <p className="sec-sub">Configure seu cardápio hoje. Sem cartão, sem contrato. Cancele quando quiser.</p>
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        <a
          href={APP_URL}
          className="hero-btn"
          style={{ height: 52, padding: "0 36px", fontSize: 16, display: "inline-flex", alignItems: "center", textDecoration: "none" }}
        >
          Criar conta grátis
        </a>
        <a
          href="#pricing"
          style={{
            height: 52, padding: "0 24px", fontSize: 15, fontWeight: 600,
            display: "inline-flex", alignItems: "center", textDecoration: "none",
            color: "rgba(159,225,203,.9)", background: "transparent",
            border: "1.5px solid rgba(159,225,203,.3)", borderRadius: "var(--radius-sm)",
            transition: "border-color .15s",
          }}
        >
          Ver planos
        </a>
      </div>
      <p className="cta-hint">Feito no Brasil para o Brasil. Suporte em português.</p>
    </section>
  );
}
