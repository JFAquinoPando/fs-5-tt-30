import { BrowserRouter as Enrutador, Route, Switch } from "react-router-dom";
import { Menu } from "./componentes/Menu";

export function Aplicacion() {
    return (
        <Enrutador>
            <Switch>
                <Route exact path="/">
                    <Menu />
                    <h1>Hola, esto es la ruta principal</h1>
                </Route>
                <Route exact path="/ruta1">
                    <Menu />
                    <h1>Estoy en ruta 1</h1>
                </Route>
                <Route exact path="/ruta2">
                    <Menu />
                    <h1>Estoy en ruta 2</h1>
                </Route>
            </Switch>
        </Enrutador>
    )
}