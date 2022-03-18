import { useState } from "react"
export const Exo2 = () => {
    const [resultat, setResultat] = useState([{id : 1 , nom : "Produit 1" },{id : 2 , nom : "Produit 2" } ])
    function handleClick(id){
        setResultat(resultat.filter( r => r.id != id));
    }
    return <ul>
        {resultat.map( (r ,index) => {
            return <li key={index}>{r.nom} <button onClick={() => handleClick(r.id)}>supprimer</button></li>
        })}
    </ul>
}