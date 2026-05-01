"use client";
import { useState } from "react";

interface WaitlistFormProps {
  inputClass?: string;
  btnText?: string;
  hintText?: string;
}

export default function WaitlistForm({
  inputClass = "",
  btnText = "Entrar na lista grátis",
  hintText = "Gratuito durante o beta. Sem cartão de crédito.",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
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
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        Você está na lista! Avisaremos quando o beta abrir. 🎉
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero-form-wrap">
        <input
          className={`hero-input ${inputClass}`}
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="hero-btn" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Aguarde…" : btnText}
        </button>
      </div>
      {hintText && <p className="hero-hint">{hintText}</p>}
      {status === "error" && <p className="form-error">{errorMsg}</p>}
    </form>
  );
}
