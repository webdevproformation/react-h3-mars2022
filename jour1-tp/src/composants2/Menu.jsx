import { Link } from "react-router-dom"

export const Menu = () => {
    return <nav className="navbar navbar-expand bg-primary navbar-dark px-4">
        <a href="#" className="navbar-brand">jour2</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
    </nav>
}