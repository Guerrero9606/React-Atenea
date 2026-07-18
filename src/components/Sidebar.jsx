import './Sidebar.css';

function Sidebar(){
    const nombreAdmin = "Admin Cesde";

    return (
        <aside className='sidebar'>
            <div className='sidebar-logo'>
                <h2>{nombreAdmin}</h2>
            </div>
            <ul className='sidebar-menu'>
                <li className='activo'>Panel General</li>
                <li>Usuarios</li>
                <li>Productos</li>
                <li>Configuracion</li>
            </ul>
            <div className='sidebar-footer'>
                <button className='btn-logout'>Cerrar Sesion</button>
            </div>
        </aside>
    );
}

export default Sidebar;