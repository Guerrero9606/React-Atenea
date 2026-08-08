import { useState, useEffect } from "react";

export default function RelojDigital(){

    const [hora, setHora] = useState( new Date().toLocaleTimeString() );

    useEffect( ()=>{

        console.log("Componente reloj vacio, iniciando temporizador");

        const intervalo = setInterval( ()=>{
            setHora(new Date().toLocaleTimeString());
        }, 1000 )

        return () => {
            console.log("Destruyendo el reloj");
            clearInterval(intervalo);
        }

    }, [] );

    return (
        <div style={{ background: '#1e293b', color: '#38bdf8', padding: '15px', borderRadius: '8px', textAlign: 'center', width: '250px', margin: '10px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>Hora Local</p>
            <h2 style={{ margin: '5px 0 0 0', fontSize: '2rem', letterSpacing: '2px' }}>{hora}</h2>
        </div>
    );

}