import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Menu = ( ) => {
    const profil = useContext(UserContext);
    const navigate = useNavigate()
    function handleClick(){
        profil.setProfil(prevProfil => {
            return {...prevProfil , isLogged : false}
        })
        navigate("/connexion");
        localStorage.removeItem("profil") // vide le localStorage 
    }
    return <nav>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            {!profil.isLogged && <li>
                <Link to="/connexion">Connexion</Link>
            </li>} 
            {profil.isLogged && <li>
                <Link to="/admin">Admin</Link>
            </li>}
            {profil.isLogged && <li>
                <a href="#" onClick={handleClick}>Déconnexion</a>
            </li>}
        </ul>
        {/**bien respecter les routes précisées dans le fichier index.js */}
    </nav>
}