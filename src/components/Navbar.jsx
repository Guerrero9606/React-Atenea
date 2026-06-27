import './Navbar.css';

function Navbar(){
    const nombreProyecto = "TechStore";

    return(
        <nav className='navbar'>
            <div className='navbar-logo'>
                <h2>{nombreProyecto}</h2>
            </div>
            <ul className='navbar-links'>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicio</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;