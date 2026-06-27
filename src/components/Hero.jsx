import './Hero.css';
import heroImg from '../assets/fcf.webp';

function Hero(){
    const titulo = "Soluciones digitales para tu negocio";
    const subtitulo = "Llevamos tu empresa al siguiente nivel";

    return(
        <section className='hero'>
            <div className='hero-text'>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
                <button className='hero-btn'>Empezar ahora</button>
            </div>
            <div className='hero-image-container'>
                <img src={heroImg} alt="Ilustacion de Tecnologia" className='hero-image'/>
            </div>
        </section>
    );
}

export default Hero;
