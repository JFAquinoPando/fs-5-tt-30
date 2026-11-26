import { BrowserRouter as Enrutador, Link } from "react-router-dom";
import { useStore } from "./../almacenamiento/useContexto.js";

export function Menu() {

    const { productos } = useStore()

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/carrito">Carrito ({productos.length})</Link>
        </nav>
    )
}