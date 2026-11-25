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
                <a href={`/producto/${id}`}>Ver detalles</a>
            </div>
        </div>
    </article>
    </>)
}