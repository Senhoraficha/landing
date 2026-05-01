"use client";
import { useState, useEffect } from "react";

export default function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao cadastrar");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Tente novamente.");
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="modal-success">
            <div className="modal-success-icon">🎉</div>
            <h3 className="modal-success-title">Você está na lista!</h3>
            <p className="modal-success-sub">Avisaremos no seu e-mail quando o beta abrir. Acesso gratuito garantido.</p>
            <button className="hero-btn" style={{ marginTop: 8 }} onClick={onClose}>Fechar</button>
          </div>
        ) : (
          <>
            <div className="modal-badge">
              <div className="badge-pulse" />
              Beta em breve · vagas limitadas
            </div>
            <h2 className="modal-title">Entre na lista de espera</h2>
            <p className="modal-sub">Acesso gratuito durante o beta. Sem cartão de crédito.</p>

            <form onSubmit={handleSubmit}>
              <div className="modal-field">
                <label className="modal-label">Seu e-mail</label>
                <input
                  className="hero-input"
                  style={{ width: "100%" }}
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <button className="hero-btn modal-submit" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Aguarde…" : "Garantir meu acesso gratuito"}
              </button>
              {status === "error" && <p className="form-error">{errorMsg}</p>}
            </form>

            <p className="modal-hint">
              Já somos <strong>247 profissionais</strong> na lista. Você recebe aviso quando abrir.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
