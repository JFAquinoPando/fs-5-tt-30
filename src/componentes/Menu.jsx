import { BrowserRouter as Enrutador, Link } from "react-router-dom";

export function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    )
}