import ContadorGeneral from "../components/ContadorGeneral";
// import ContadorVentas from "../components/ContadorVentas";
import RelojDigital from "../components/RelojDigital";

export default function PanelGeneral(){
    return(
        <div>
            <h1>Panel General</h1>
            <p>Bienvenido al sistema. Aqui estan las estadisticas</p>

            <ContadorGeneral />
            <RelojDigital />

        </div>
    );
}