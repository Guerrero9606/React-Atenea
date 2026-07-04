import './ServicioCard.css';
//import imagenServicio from '../assets/servicio.jpg'

function ServicioCard(){
    const nombreServicio = "Desarrollo WEB"
    const descripcion = "Creamos Single Page Applications"
    const precio = "$500 USD"
    const enOferta = true;

    return (
        <article className='servicio-card'>
            <div className='card-image-contenedor'>
                <img src={imagenServicio} alt="Servicio WEB" className='card-image'/>
                {enOferta && <span className='card-etiqueta'>¡Oferta Especial!</span>}
            </div>
            <div className='card-contenido'>
                <h3 className='card-titulo'>{nombreServicio}</h3>
                <p className='card-descripcion'>{descripcion}</p>
                <div className='card-footer'>
                    <span className='card-precio'>{precio}</span>
                    <button className='card-boton'>Contratar</button>
                </div>
            </div>
        </article>
    );
}

export default ServicioCard;