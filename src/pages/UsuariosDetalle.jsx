import { useParams, Link } from "react-router-dom";

export default function UsuariosDetalle(){
    const parametros = useParams();
    const usuarioId = parametros.id;

    return (
        <div>
            <h2>Perfil del Usuario</h2>
            <p style={{margin: '20px'}}>Estas viendo la informacion detallada del usuario con ID: <strong>{usuarioId}</strong></p>

            <Link to="/usuarios" style={{padding: '10px', background: '#e2e8f0', borderRadius: '5px', textDecoration: 'none'}}>
                Volver a la Lista
            </Link>
        </div>
    );
};