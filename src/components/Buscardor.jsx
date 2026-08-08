import { useState } from "react";

export default function Buscardor({clase}){

    const [textoBusqueda, setTextoBusqueda] = useState('');

    const manejarCambio = (e) => {
        setTextoBusqueda(e.target.value);
    };

    const limpiar = () => {
        setTextoBusqueda('');
    }

    return(
        // style={{ display: 'flex', width: '500px', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}
        <div className={clase}>
            <input type="text" 
                placeholder="Escribe algo aqui..."
                value={textoBusqueda}
                onChange={manejarCambio}
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e1', marginBottom: '5px' }}
            />

            <p style={{ color: '#64748b' }} >
                Vista previa en vivo: <strong style={{ color: '#0f172a' }}>{textoBusqueda}</strong>
            </p>

            {textoBusqueda.length > 0 && (
                <button onClick={limpiar} style={{ background: '#f87171', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                    Borrar todo
                </button>
            )}
        </div>

    );

};