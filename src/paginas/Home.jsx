import { useEffect, useState } from "react";
import { Menu } from "./../componentes/Menu";
import { Tarjeta } from "../componentes/Tarjeta";


export const Home = () => {
    const [productos, setProductos] = useState([])

    useEffect(
        function () {
            const url = "https://fakestoreapi.com/products"
            fetch(url)
                .then(peticion => peticion.json())
                .then(respuesta => {
                    setProductos(respuesta)
                })
        }, [])

    return (
        <>
            <Menu />
            <section>
                {productos.map(function(item, indice){
                    return (<Tarjeta key={item.id}
                            id={ item.id }
                            titulo={ item.title }
                            precio={ item.price }
                            imagen={item.image}                       
                            cantidad={ item.rating.count }
                        />)
                })}
            </section>
        </>
    )
}