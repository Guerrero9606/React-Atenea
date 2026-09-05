import InventarioAxios from "../components/InventarioAxios";
import InventarioMongo from "../components/InventarioMongo";
import NuevoProductoMongo from "../components/NuevoProductoMongo";
import ProductoCard from "../components/ProductoCard";

export default function Productos(){

    const baseProductos = [
        {id: 1, nombre: 'Laptop Pro 15', precio: 1200},
        {id: 2, nombre: 'Auriculares Inalambricos', precio: 150},
        {id: 3, nombre: 'Teclado Mecanico', precio: 95},
        {id: 4, nombre: 'Monitor 4K', precio: 400}
    ]

    return(
        <div>
            <h1>Gestion de Productos</h1>
            <div style={{display: 'flex', marginTop: '20px', gap: '20px'}}>
                <div>
                    <NuevoProductoMongo />
                </div>
                <div style={{flexGrow: 1}}>
                    <InventarioAxios />
                </div>
            </div>
        </div>
    );
}