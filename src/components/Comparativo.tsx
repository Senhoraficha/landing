const Yes = () => (
  <div className="cr-yes">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5L4.2 7.5L8 3" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);
const No = () => <span className="cr-no">✗</span>;
const Partial = () => <span className="cr-partial">△</span>;

const rows: [string, React.ReactNode, React.ReactNode, React.ReactNode][] = [
  ["Criação guiada de ficha técnica",              <No />,      <Partial />, <Yes />],
  ["Recalculo automático ao atualizar ingrediente",<No />,      <Partial />, <Yes />],
  ["CMV em tempo real",                            <No />,      <Yes />,     <Yes />],
  ["Sugestão de preço de venda por canal",         <No />,      <No />,      <Yes />],
  ["Alertas quando CMV sai da meta",               <No />,      <Partial />, <Yes />],
  ["Sem fórmulas ou conhecimento técnico",         <No />,      <Partial />, <Yes />],
  ["Cálculo de margem delivery vs. salão",         <No />,      <No />,      <Yes />],
  ["Sub-receitas e fichas internas",               <Partial />, <Yes />,     <Yes />],
];

export default function Comparativo() {
  return (
    <section className="section comparativo">
      <p className="sec-eyebrow">Já tentei planilha</p>
      <h2 className="sec-title">Por que a Senhora Ficha<br />é <em>diferente</em>?</h2>
      <p className="sec-sub">A diferença não é de ferramenta — é de resultado.</p>
      <div className="comp-table-wrap">
        <div className="comp-header-row">
          <div className="ch-cell feature"><h4 style={{ color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: ".05em" }}>Funcionalidade</h4></div>
          <div className="ch-cell planilha"><h4>📊 Planilha</h4></div>
          <div className="ch-cell outras"><h4>🔧 Outras plataformas</h4></div>
          <div className="ch-cell sf"><h4>Senhora Ficha</h4><p>Simples. Prático. Lucrativo.</p></div>
        </div>
        {rows.map(([label, planilha, outras, sf], i) => (
          <div key={label} className={`comp-row${i % 2 === 1 ? " alt" : ""}`}>
            <div className="cr-feature">{label}</div>
            <div className="cr-cell">{planilha}</div>
            <div className="cr-cell">{outras}</div>
            <div className="cr-cell">{sf}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "var(--muted)" }}>
        ✗ Não disponível &nbsp;·&nbsp; △ Parcial / exige configuração &nbsp;·&nbsp; <span style={{ color: "#0F6E56", fontWeight: 700 }}>✓ Incluso</span>
      </div>
    </section>
  );
}
