import { Link } from "react-router-dom";

export default function UsuariosLista(){
    return(
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                <li><Link to="/usuarios/101">Ver Perfil de Juan Perez (ID 101)</Link></li>
                <li><Link to="/usuarios/205">Ver Perfil de Ana Gomez (ID 205)</Link></li>
            </ul>
        </div>
    );
}