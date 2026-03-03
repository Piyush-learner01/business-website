import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header style={{ background: "white", boxShadow: "var(--shadow)" }}>
      <div className="container" style={{ padding: "20px 0" }}>
        <h1>Modern Business</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;