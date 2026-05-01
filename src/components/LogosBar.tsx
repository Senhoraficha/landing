export default function LogosBar() {
  const logos = ["Restaurantes", "Confeitarias", "Food Trucks", "Delivery", "Marmiteiros", "Chefs Profissionais"];
  return (
    <div className="logos-bar">
      <span className="logos-label">Usado por profissionais de</span>
      {logos.map((l) => (
        <div key={l} className="logo-item">{l}</div>
      ))}
    </div>
  );
}
