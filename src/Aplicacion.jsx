import { BrowserRouter as Enrutador, Route, Switch } from "react-router-dom";
import { Menu } from "./componentes/Menu";
import { Home } from "./paginas/Home";
import { Contacto } from "./paginas/Contacto";

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
                <Route exact path="/publicacion">
                    <></>
                </Route>
            </Switch>
        </Enrutador>
    )
}