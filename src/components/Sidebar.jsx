import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Sidebar(){
    // const nombreAdmin = "Admin Cesde";
    const { usuario, alternarUsuario } = useContext(AuthContext);

    return (
        <aside className='sidebar'>
            <div className='sidebar-logo'>
                <h2>Admin Pro</h2>
            </div>
            <nav className='sidebar-menu'>
                <NavLink to="/" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} end>
                    Panel General
                </NavLink>
                {usuario.rol === "Administrador" && (
                    <NavLink to="/usuarios" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} >
                        Usuarios
                    </NavLink>
                )}
                <NavLink to="/productos" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} >
                    Productos
                </NavLink>
                <NavLink to="/configuracion" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} >
                    Configuracion
                </NavLink>
            </nav>
            <div className='sidebar-footer'>
                {
                <button className='btn-logout'
                    onClick={alternarUsuario}
                    style={{ background: usuario.conectado ? '#ef4444' : '#22c55e' }}
                >{usuario.conectado ? 'Cerrar Sesion' : 'Iniciar Sesion'}
                </button>
                }
            </div>
        </aside>
    );
}

export default Sidebar;