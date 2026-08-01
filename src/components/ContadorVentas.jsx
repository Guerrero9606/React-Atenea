import { useState } from "react";

export default function ContadorVentas(){

    const [ventas, setVentas] = useState(0);

    const registrarVenta = () => {
        setVentas(ventas + 1);
    }

    const reiniciar = () => {
        setVentas(0)
    }

    return (
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', width: '300px' }}>
            <h3 style={{ margin: 0, color: "#64748b" }}>Ventas del dia</h3>
            <h1 style={{ fontSize: '3rem', color: '#0f172a' }}>{ventas}</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={registrarVenta} style={{ background: '#2ed573', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', flexGrow: 1 }}>
                    ➕ Nueva Venta
                </button>
                <button onClick={reiniciar} style={{ background: '#ff4757', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
                    🔄
                </button>
            </div>
        </div>
    );

}