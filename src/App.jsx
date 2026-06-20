import './App.css'
import Tarjeta from './components/Tarjeta';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return(
    <div className='contenedor-principal'>
      <Header />

      <main className='contenedor-tarjetas'>
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </main>

      <Footer />
    </div>
  );
}

export default App
