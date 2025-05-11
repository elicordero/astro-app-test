import { Link } from "astro/router";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/about">Acerca de</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
}
