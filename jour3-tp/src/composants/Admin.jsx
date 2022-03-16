// vérifier si isLogged === true 
// redirection => vers la page de connexion
import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { Navigate  } from "react-router-dom"

export const Admin = () => {
    const { isLogged } = useContext(UserContext);

    return <>
        { isLogged ? <>"je suis la page d'admin"</> : <Navigate  to="/connexion"  /> }
    </>
}