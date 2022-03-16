import { Link } from "react-router-dom"

export const Menu = ( ) => {
    return <nav>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/connexion">Connexion</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
        {/**bien respecter les routes précisées dans le fichier index.js */}
    </nav>
}