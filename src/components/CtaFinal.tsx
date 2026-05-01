"use client";
import { useWaitlist } from "@/context/WaitlistContext";

export default function CtaFinal() {
  const { open } = useWaitlist();
  return (
    <section className="cta-final">
      <span className="cta-pill">Gratuito durante o beta</span>
      <h2 className="sec-title">Entre na lista<br />antes do lançamento</h2>
      <p className="sec-sub">Quem entrar agora garante acesso antecipado — e condições exclusivas no lançamento oficial.</p>
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center" }}>
        <button className="hero-btn" style={{ height: 52, padding: "0 36px", fontSize: 16 }} onClick={open}>
          Garantir acesso gratuito
        </button>
      </div>
      <p className="cta-hint">Sem cartão de crédito. Você recebe um aviso quando o beta abrir.</p>
    </section>
  );
}
