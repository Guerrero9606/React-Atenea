import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <h2>Mi Primera SPA</h2>
      <nav>
        <a href="#inicio">Inicio</a> | <a href="#servicios">Servicios</a>
      </nav>
    </header>
  );
}
export default Header;