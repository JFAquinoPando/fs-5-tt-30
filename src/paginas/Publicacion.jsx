import { Link, useParams } from "react-router-dom";
import { Menu } from "./../componentes/Menu";
import { useEffect, useState } from "react";

/* Componente para mostrar el detalle de una publicación / producto */
export function Publicacion() {
    const [producto, setProducto] = useState({
        id: 0,
        titulo: "Producto",
        precio: 1,
        descripcion: "Lorem ipsum",
        categoria: "nada",
        imagen: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        rating: {
            valoracion: 5.0,
            votos: 1,
            cantidad: 1
        }
    })

    const { id } = useParams()

    console.log("Valor de ID:", id);

    useEffect(function () {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(peticion => peticion.json())
            .then(function (respuesta) {
                setProducto({
                    id: respuesta.id,
                    titulo: respuesta.title,
                    precio: respuesta.price,
                    descripcion: respuesta.description,
                    categoria: respuesta.category,
                    imagen: respuesta.image,
                    rating: {
                        valoracion: respuesta.rating.rate,
                        votos: respuesta.rating.count,
                        cantidad: respuesta.rating.count
                    }
                })
            })
    }, [])

    return (
        <>
            <Menu />
            <div className="detalle-producto">
                <div className="detalle-imagen">
                    <img src={producto.imagen} alt={producto.titulo} />
                </div>
                <div className="detalle-info">
                    <span className="categoria">{producto.categoria}</span>
                    <h1>{producto.titulo}</h1>
                    <div className="rating">
                        <span className="estrellas">⭐ {producto.rating?.valoracion}</span>
                        <span className="votos">({producto.rating?.votos} opiniones)</span>
                    </div>
                    <div className="precio">DISPONIBLES: {producto.rating.cantidad}</div>
                    <div className="precio">${producto.titulo}</div>
                    <p className="descripcion">{producto.descripcion}</p>
                    <div className="acciones">
                        <button type="button" className="btn-comprar">Agregar al carrito</button>
                        <Link to="/" className="btn-volver">← Volver al catálogo</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
