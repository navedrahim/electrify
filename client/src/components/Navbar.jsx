import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1 class="logo">🔌 electrify</h1>
      <Link class="navlink" to="/">Home</Link>
      <Link class="navlink" to="/browse">Browse Cars</Link>
    </nav>
  );
}

export default Navbar;
