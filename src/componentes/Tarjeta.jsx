import { Link } from "react-router-dom";

export function Tarjeta({
    id, titulo, precio, imagen, cantidad
}) {
    return (<>
    <article>
        <div>
            <img src={imagen} alt={titulo} />
        </div>
        <h3>{titulo}</h3>
        <div>
            <div>
                <strong>Precio:</strong><span>{precio}</span>
            </div>
            <div>
                <strong>Cantidad:</strong><span>{cantidad}</span>
            </div>
            <div>
                <Link to={`/producto/${id}`}>Ver detalles</Link>
            </div>
        </div>
    </article>
    </>)
}