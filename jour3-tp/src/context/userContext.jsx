import { createContext , useState } from "react" ;

export const UserContext = createContext()

// créer le Provider => founisseur
// c'est un composant

export const UserProvider = (props) =>{
    const [profil , setProfil] = useState({
        login : "alain",
        password : "12345",
        isLogged : false
    })
    return <UserContext.Provider value={{...profil , setProfil}}>
        {props.children}
    </UserContext.Provider>
}
