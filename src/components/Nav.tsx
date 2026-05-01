"use client";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <a className="nav-logo" href="#">
        <div className="nav-logo-mark">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="1" width="14" height="16" rx="3" fill="rgba(255,255,255,.25)" />
            <rect x="2" y="1" width="14" height="16" rx="3" stroke="white" strokeWidth="1.2" />
            <line x1="5" y1="6.5" x2="13" y2="6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="5" y1="9" x2="13" y2="9" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="5" y1="11.5" x2="9.5" y2="11.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="nav-logo-text">Senhora Ficha</span>
      </a>

      <div className="nav-links">
        <a className="nav-link" href="#como">Como funciona</a>
        <a className="nav-link" href="#features">Funcionalidades</a>
        <a className="nav-link" href="#quem">Para quem</a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button className="nav-login">Já tenho acesso</button>
        <a href="#lista">
          <button className="nav-cta">Entrar na lista</button>
        </a>
      </div>
    </nav>
  );
}
