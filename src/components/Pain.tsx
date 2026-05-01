export default function Pain() {
  return (
    <section className="section pain">
      <p className="sec-eyebrow">Você se identifica?</p>
      <h2 className="sec-title">O problema que ninguém<br />fala em voz alta</h2>
      <p className="sec-sub">Boa parte dos negócios de comida quebra não por falta de cliente — mas por margem que escorrega sem que ninguém perceba.</p>
      <div className="pain-grid">
        <div className="pain-card">
          <div className="pain-icon" style={{ background: "#FAE8F0" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#DA2776" strokeWidth="1.4" />
              <line x1="10" y1="6" x2="10" y2="10.5" stroke="#DA2776" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="13.5" r=".9" fill="#DA2776" />
            </svg>
          </div>
          <p className="pain-q">Cobra um preço e não sabe se está tendo lucro?</p>
          <p className="pain-a">Sem ficha técnica, qualquer preço é um chute. E chute errado vira prejuízo silencioso.</p>
        </div>
        <div className="pain-card">
          <div className="pain-icon" style={{ background: "#E1F5EE" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 14L7.5 9L11 12.5L15.5 6" stroke="#0F6E56" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="pain-q">O delivery pediu desconto — você aceitou sem calcular?</p>
          <p className="pain-a">A taxa do app já come parte da margem. Desconto por cima pode fazer você vender no prejuízo.</p>
        </div>
        <div className="pain-card">
          <div className="pain-icon" style={{ background: "#FAEEDA" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V10L13.5 12.5" stroke="#854F0B" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="10" r="7.5" stroke="#854F0B" strokeWidth="1.3" />
            </svg>
          </div>
          <p className="pain-q">Ingrediente subiu — e a margem encolheu sem você perceber?</p>
          <p className="pain-a">Sem controle automático, a inflação dos insumos corrói o lucro prato a prato.</p>
        </div>
      </div>
    </section>
  );
}
