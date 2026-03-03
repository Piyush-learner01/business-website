import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul style={{
        display: "flex",
        gap: "25px",
        listStyle: "none",
        marginTop: "10px"
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;