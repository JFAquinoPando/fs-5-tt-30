import { BrowserRouter as Enrutador, Link } from "react-router-dom";

export function Menu() {
    return (
        <Enrutador>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/ruta1">Ruta 1</Link>
                <Link to="/ruta2">Ruta 2</Link>
            </nav>
        </Enrutador>
    )
}