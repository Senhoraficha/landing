"use client";
import { useState } from "react";

const APP_URL = "https://app.senhoraficha.com.br"; // TODO: atualizar com URL real

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 5L4.2 7.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const plans = [
  {
    key: "free",
    name: "Free",
    desc: "Experimente sem compromisso. Ideal para testar com suas receitas mais vendidas.",
    monthlyPrice: null,
    annualPrice: null,
    annualNote: "",
    cta: "Criar conta grátis",
    ctaClass: "btn btn-secondary btn-quiet btn-block",
    href: APP_URL,
    highlighted: false,
    popular: false,
    features: [
      "Até 3 fichas técnicas",
      "CMV automático por porção",
      "Cálculo básico de custo",
    ],
  },
  {
    key: "basic",
    name: "Básico",
    desc: "Para confeitarias, food trucks e marmiteiros com cardápio definido.",
    monthlyPrice: "29",
    annualPrice: "23",
    annualNote: "ou R$280/ano — economize R$68",
    cta: "Assinar Básico",
    ctaClass: "btn btn-primary btn-loud btn-block",
    href: APP_URL,
    highlighted: true,
    popular: true,
    features: [
      "Até 20 fichas técnicas",
      "CMV em tempo real",
      "Delivery vs. salão separado",
      "Sugestão de preço por canal",
      "Alertas quando margem cai",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    desc: "Para restaurantes com cardápio completo e operação sem limites.",
    monthlyPrice: "67",
    annualPrice: "54",
    annualNote: "ou R$644/ano — economize R$160",
    cta: "Assinar Pro",
    ctaClass: "btn btn-primary btn-loud btn-block",
    href: APP_URL,
    highlighted: false,
    popular: false,
    features: [
      "Fichas e ingredientes ilimitados",
      "Tudo do plano Básico",
      "Sub-receitas e fichas internas",
      "Exportação com a sua marca",
      "Suporte prioritário",
    ],
  },
];

const fullRows: [string, string, string, string][] = [
  ["Fichas técnicas",                  "3",          "20",          "100"],
  ["Ingredientes cadastrados",         "30",          "160",         "800"],
  ["Mensagens de IA por mês",          "100",         "1.500",       "Ilimitado"],
  ["CMV em tempo real",                "✓",           "✓",           "✓"],
  ["Cálculo delivery vs. salão",       "—",           "✓",           "✓"],
  ["Sugestão de preço por canal",      "—",           "✓",           "✓"],
  ["Alertas de margem",                "—",           "✓",           "✓"],
  ["Sub-receitas e fichas internas",   "—",           "—",           "✓"],
  ["Exportação PDF/Excel",             "—",           "—",           "✓"],
  ["Exportação com sua marca",         "—",           "—",           "✓"],
  ["Mensagens extras (add-on)",        "—",           "R$9,90/500",  "—"],
  ["Suporte",                          "Comunidade",  "E-mail",      "Prioritário"],
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section pricing-section">
      <p className="sec-eyebrow">Planos</p>
      <h2 className="sec-title">Comece grátis.<br />Evolua quando precisar.</h2>
      <p className="sec-sub">Sem contrato, sem cartão, sem complicação. Cancele quando quiser.</p>

      {/* Toggle */}
      <div className="plan-toggle-wrap">
        <span className={`plan-toggle-label ${!annual ? "active" : ""}`}>Mensal</span>
        <button
          className={`plan-toggle-btn ${annual ? "annual" : "monthly"}`}
          onClick={() => setAnnual(!annual)}
          aria-label="Alternar entre mensal e anual"
        >
          <span className="plan-toggle-knob" />
        </button>
        <span className={`plan-toggle-label ${annual ? "active" : ""}`}>Anual</span>
        {annual && <span className="plan-toggle-badge">2 meses grátis</span>}
      </div>

      {/* Cards */}
      <div className="plans-grid">
        {plans.map((plan) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice;
          return (
            <div key={plan.key} className={`plan-card${plan.highlighted ? " highlighted" : ""}`}>
              {plan.popular && <div className="plan-popular-badge">Mais popular</div>}
              <div className="plan-name">{plan.name}</div>

              {price ? (
                <>
                  <div className="plan-price">
                    <sup>R$</sup>{price}<sub>/mês</sub>
                  </div>
                  <div className="plan-annual-note">
                    {annual ? plan.annualNote : "cobrado mensalmente"}
                  </div>
                </>
              ) : (
                <>
                  <div className="plan-price" style={{ fontSize: 36 }}>Grátis</div>
                  <div className="plan-annual-note">para sempre</div>
                </>
              )}

              <p className="plan-desc">{plan.desc}</p>

              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f} className="plan-feature" style={{ listStyle: "none" }}>
                    <span className="plan-feature-icon"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href={plan.href} className={plan.ctaClass}>
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>

      {/* Accordion — detalhes técnicos */}
      <details className="plans-accordion">
        <summary>Ver comparação completa de features</summary>
        <div className="plans-accordion-inner">
          <table className="full-comp-table">
            <thead>
              <tr>
                <th></th>
                <th className="th-free">Free</th>
                <th className="th-basic">Básico</th>
                <th className="th-pro">Pro</th>
              </tr>
            </thead>
            <tbody>
              {fullRows.map(([label, free, basic, pro]) => (
                <tr key={label}>
                  <td>{label}</td>
                  {[free, basic, pro].map((val, i) => (
                    <td key={i}>
                      {val === "✓" ? <span className="comp-check">✓</span>
                       : val === "—" ? <span className="comp-dash">—</span>
                       : <span className={val === "Ilimitado" || val === "Prioritário" ? "comp-val" : "comp-val-muted"}>{val}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  );
}
