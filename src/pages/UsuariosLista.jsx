import { Link } from "react-router-dom";
import UsuarioCard from "../components/UsuarioCard";

export default function UsuariosLista(){

    const baseDeDatosUsuarios = [
        {id:1, nombre: "Juan Perez", rol: "Administrador", estado: "Activo", imagen: "https://randomuser.me/api/portraits/men/32.jpg"},
        {id:2, nombre: "Ana Gomez", rol: "Diseñadora UX", estado: "Inactivo", imagen: "https://randomuser.me/api/portraits/women/32.jpg"},
        {id:3, nombre: "Carlos Lopez", rol: "Desarrollador", estado: "Activo", imagen: "https://randomuser.me/api/portraits/men/36.jpg"},
        {id:4, nombre: "Maria Silva", rol: "Marketing", estado: "Activo", imagen: "https://randomuser.me/api/portraits/women/44.jpg"}
    ]

    return(
        <div>
            <h1>Gestion de Usuarios</h1>
            <p>Total de Usuarios: {baseDeDatosUsuarios.length}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>

                {baseDeDatosUsuarios.map((usuario)=>(
                    <UsuarioCard 
                        key={usuario.id}
                        nombre={usuario.nombre}
                        rol={usuario.rol}
                        estado={usuario.estado}
                        imagen={usuario.imagen}
                    />
                ))}


                {/* <UsuarioCard 
                    nombre="Juan Perez"
                    rol="Administrador"
                    estado="Activo"
                    imagen="https://randomuser.me/api/portraits/men/32.jpg"
                />

                <UsuarioCard 
                    nombre="Ana Gomez"
                    rol="Diseñadora UX"
                    estado="Inactivo"
                    imagen="https://randomuser.me/api/portraits/women/44.jpg"
                /> */}

            </div>

        </div>
    );
}