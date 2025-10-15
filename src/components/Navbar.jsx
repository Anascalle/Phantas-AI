import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Phantas AI</h2>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registro</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
