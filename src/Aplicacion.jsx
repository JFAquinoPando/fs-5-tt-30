import { BrowserRouter as Enrutador, Route, Switch } from "react-router-dom";
import { Home } from "./paginas/Home";
import { Contacto } from "./paginas/Contacto";
import { Publicacion } from "./paginas/Publicacion";
import { Carrito } from "./paginas/Carrito";

export function Aplicacion() {
    return (
        <Enrutador>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/contacto">
                    <Contacto />
                </Route>
                <Route exact path="/producto/:id">
                    <Publicacion />
                </Route>
                <Route exact path="/carrito">
                    <Carrito />
                </Route>
            </Switch>
        </Enrutador>
    )
}