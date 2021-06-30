import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Electrify</h1>
      <Link to="/">Home</Link>
      <Link to="/browse">Browse Cars</Link>
    </nav>
  );
}

export default Navbar;
