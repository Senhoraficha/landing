const faqs = [
  {
    q: "Precisa de cartão de crédito para começar?",
    a: "Não. O plano Free é gratuito para sempre — basta criar sua conta com e-mail e senha. Nenhum dado de pagamento é solicitado.",
  },
  {
    q: "Aceita Pix?",
    a: "Sim. Aceitamos Pix, cartão de crédito e débito. O Pix é nossa forma de pagamento recomendada para assinaturas mensais.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Sem multa, sem fidelidade e sem burocracia. Você cancela com um clique no painel. Seu acesso continua até o final do período pago.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. A Senhora Ficha foi pensada primeiro para o celular. Você pode criar e consultar fichas técnicas direto do smartphone, sem instalar nada.",
  },
  {
    q: "Meus dados e receitas ficam comigo?",
    a: "Sempre. Seus dados são seus e nunca são compartilhados. A plataforma segue a Lei Geral de Proteção de Dados (LGPD). Você pode exportar tudo a qualquer momento.",
  },
  {
    q: "O que é CMV? Preciso saber antes de usar?",
    a: <><strong>CMV</strong> é o Custo da Mercadoria Vendida — o percentual do preço de venda que vai para cobrir os ingredientes. <strong>Não precisa entender antes de usar</strong>: a Senhora Ficha guia cada passo e explica o resultado em linguagem simples.</>,
  },
  {
    q: "E se eu atingir o limite do plano Básico?",
    a: "Você pode comprar um pacote avulso de 500 mensagens por R$9,90 — sem precisar mudar de plano. Ou fazer o upgrade para o Pro a qualquer momento.",
  },
  {
    q: "Posso importar minhas fichas que já tenho em planilha?",
    a: "Sim. A plataforma aceita upload de arquivos para extração automática de ingredientes via IA. Seus dados já cadastrados em planilhas podem ser migrados.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <p className="sec-eyebrow">Dúvidas frequentes</p>
      <h2 className="sec-title">Perguntas <em>frequentes</em></h2>
      <p className="sec-sub">Não encontrou o que procura? Fale com a gente pelo e-mail contato@senhoraficha.com.br</p>
      <dl className="faq-list">
        {faqs.map((faq, i) => (
          <details key={i} className="faq-item">
            <summary>{faq.q}</summary>
            <div className="faq-answer">{faq.a}</div>
          </details>
        ))}
      </dl>
    </section>
  );
}
