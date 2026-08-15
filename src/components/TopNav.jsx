import './TopNav.css';
import Buscardor from './Buscardor';
import RelojDigital from './RelojDigital';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function TopNav() {
    // const usuarioActual = "Juan Perez";
    const { usuario } = useContext(AuthContext);

    return (
        <header className='topnav'>
            <div className='buscador'>
                {/* <input type="text" placeholder='Buscar...' className='input-buscar'/>  */}
                <Buscardor clase="input-buscar"/>
            </div>
            <div className='perfil-usuario'>
                <span className='notificaciones'>🔔</span>
                {usuario.conectado ? (
                    <>
                        <div className='avatar'>{usuario.nombre.charAt(0)}</div>
                        <span className='nombre-usuario'>Hola, {usuario.nombre}</span>
                        <span className='rol-badge' style={{fontSize: '0.8rem', background: '#e2e8f0', padding: '3px', borderRadius: '5px'}}>
                            {usuario.rol}
                        </span>
                    </>
                ) : (
                    <span className='nombre-usuario' style={{ color: 'red' }}>Desconectado</span>
                ) }
            </div>
            {/* <RelojDigital /> */}
        </header>
    );
}

export default TopNav;