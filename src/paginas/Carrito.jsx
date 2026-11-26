import { Link } from "react-router-dom";
import { useStore } from "./../almacenamiento/useContexto.js";
import { Menu } from "./../componentes/Menu.jsx";
import Swal from 'sweetalert2'


export function Carrito() {
    const { productos, vaciar } = useStore();

    // Cálculo del total acumulado de todos los productos
    const total = productos.reduce(function (acumulador, item) {
        return acumulador + (Number(item.precio) || 0);
    }, 0);


    function handleClick() {

        Swal.fire({
            title: "Gracias por su compra",
            text: `¡Orden procesada por $${total.toFixed(2)}!`,
            icon: "success"
        }).then(
            resultado => {
                vaciar()
            }
        )
    }

    return (
        <>
            <Menu />
            <main className="carrito-contenedor">
                <h1>Tu Carrito de Compras</h1>

                {productos.length === 0 ? (
                    <div className="carrito-vacio">
                        <p>Tu carrito está actualmente vacío.</p>
                        <Link to="/" className="btn-comprar">
                            Explorar catálogo
                        </Link>
                    </div>
                ) : (
                    <div className="carrito-contenido">
                        <ul className="carrito-lista">
                            {productos.map(function (item, idx) {
                                const subtotal = Number(item.precio) || 0;

                                return (
                                    <li key={item.id ? `${item.id}-${idx}` : idx} className="carrito-item">
                                        <div className="carrito-item-info">
                                            <div className="carrito-item-img">
                                                <img src={item.imagen} alt={item.titulo} />
                                            </div>
                                            <div className="carrito-item-detalle">
                                                <strong>{item.titulo}</strong>
                                                {item.categoria && (
                                                    <span className="categoria">{item.categoria}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="carrito-item-precios">
                                            <div className="carrito-campo">
                                                <span className="etiqueta">Cantidad</span>
                                                <span className="valor">1</span>
                                            </div>
                                            <div className="carrito-campo">
                                                <span className="etiqueta">Precio Unitario</span>
                                                <span className="valor">${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="carrito-campo subtotal">
                                                <span className="etiqueta">Subtotal</span>
                                                <span className="valor">${subtotal.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <aside className="carrito-resumen">
                            <h2>Resumen del Pedido</h2>
                            <div className="resumen-fila">
                                <span>Productos ({productos.length}):</span>
                                <strong>${total.toFixed(2)}</strong>
                            </div>
                            <div className="resumen-fila">
                                <span>Envío:</span>
                                <strong>Gratis</strong>
                            </div>
                            <div className="resumen-fila total">
                                <span>Total a pagar:</span>
                                <strong className="precio">${total.toFixed(2)}</strong>
                            </div>
                            <div className="carrito-acciones">
                                <button
                                    type="button"
                                    className="btn-comprar"
                                    onClick={handleClick}
                                >
                                    Pagar pedido
                                </button>
                                <Link to="/" className="btn-volver">
                                    ← Seguir comprando
                                </Link>
                            </div>
                        </aside>
                    </div>
                )}
            </main>
        </>
    );
}
