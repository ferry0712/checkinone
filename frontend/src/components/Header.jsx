import "./Header.css";

export default function Header() {
  return (
    <header className="ci-header">
      <div className="ci-logo">CheckInOne</div>
      <nav className="ci-nav">
        <button className="ci-btn ci-btn-secondary">Create account</button>
        <button className="ci-btn ci-btn-primary">Login</button>
      </nav>
    </header>
  );
}
