import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <h1 className="logo">🔌 electrify</h1>
      <Link className="navlink" to="/">Home</Link>
      <Link className="navlink" to="/browse">Browse Cars</Link>
    </nav>
  );
}

export default Navbar;
