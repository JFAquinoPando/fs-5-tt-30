import { Menu } from "./../componentes/Menu";

export const Contacto = () => {
    return (
        <>
            <Menu />
            <main>
                <div>
                    <h1>Contáctanos</h1>
                    <form action="" method="get">
                        <div><input type="text" name="nombre" placeholder="Juan Pérez" /></div>
                        <div><input type="email" name="correo" placeholder="correo@mail.net" /></div>
                        <div><textarea name="motivo" placeholder="Ingresa el motivo" /></div>
                        <button>Enviar</button>
                    </form>
                    <output></output>
                </div>
                <aside>
                    <h3>Somos una empresa jóven</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quis? Impedit, ea nisi excepturi mollitia delectus laudantium perspiciatis vel a iure. Voluptatibus rem quis quia maxime quisquam at praesentium nobis!</p>
                </aside>
            </main>
        </>
    )
}