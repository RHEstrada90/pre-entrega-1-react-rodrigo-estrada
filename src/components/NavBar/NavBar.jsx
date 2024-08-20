import { CartWidget } from "./components/CartWidget"


export const NavBar = () => {
    return <>
        <nav>
            <ul>
                <li><a href="#">Bebidas</a></li>
                <li><a href="#">Postres</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    </>
}