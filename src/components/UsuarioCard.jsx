import { useState } from 'react';
import './UsuarioCard.css';

function UsuarioCard({nombre, rol, estado, imagen}){

    const [siguiendo, setSiguiendo] = useState(false);

    const claseEstado = estado === "Activo" ? "badge-activo" : "badge-inactivo";

    const alternarSeguimiento = () => {
        setSiguiendo(!siguiendo);
    }

    return(
        <div className='usuario-card'>
            <img src={imagen} alt={`Foto de ${nombre}`} className='usuario-img' />
            <div className='usuario-info'>
                <h3>{nombre}</h3>
                <p className='usuario-rol'>{rol}</p>
                <span className={`usuario-badge ${claseEstado}`}>
                    {estado}
                </span>
            </div>

            <div className='usuario-acciones'>
                <button onClick={alternarSeguimiento}
                    style={{
                        background: siguiendo ? '#e2e9f0' : '#38bdf8',
                        color: siguiendo ? '#475569' : '#white'
                    }}
                >
                    {siguiendo ? '✓ Siguiendo' : '➕ Seguir'}
                </button>
            </div>
        </div>
    );
}

export default UsuarioCard;