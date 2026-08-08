import './TopNav.css';
import Buscardor from './Buscardor';
import RelojDigital from './RelojDigital';

function TopNav() {
    const usuarioActual = "Juan Perez";

    return (
        <header className='topnav'>
            <div className='buscador'>
                {/* <input type="text" placeholder='Buscar...' className='input-buscar'/>  */}
                <Buscardor clase="input-buscar"/>
            </div>
            <div className='perfil-usuario'>
                <span className='notificaciones'>🔔</span>
                <div className='avatar'>JP</div>
                <span className='nombre-usuario'>Hola, {usuarioActual}</span>
            </div>
            {/* <RelojDigital /> */}
        </header>
    );
}

export default TopNav;