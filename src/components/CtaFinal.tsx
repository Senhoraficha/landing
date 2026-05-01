import WaitlistForm from "./WaitlistForm";

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <span className="cta-pill">Gratuito durante o beta</span>
      <h2 className="sec-title">Entre na lista<br />antes do lançamento</h2>
      <p className="sec-sub">Quem entrar agora garante acesso antecipado — e condições exclusivas no lançamento oficial.</p>
      <WaitlistForm
        inputClass="cta-input"
        btnText="Garantir acesso gratuito"
        hintText="Sem cartão de crédito. Você recebe um aviso quando o beta abrir."
      />
    </section>
  );
}
