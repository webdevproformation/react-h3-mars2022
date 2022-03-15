## Composant 
import { useState, useEffect } from "react"

function Menu (){
    const [profils, setProfils] = useState([])
    useEffect(()=> {
        fetch("http://data.com")
        .then(response => response.json())
        .then( data => setProfils(data) )

    } , [] ) ;
    // sideEffect => effet secondaire 

    function handleClick(){
        const cloneProfils = [...profils]
        // fonction pure => programmation fonctionnelle 
        profils.push({nom : "ALain"})
        setProfils(cloneProfils)
    }
    return <>
        <h1></h1>
        <button onClick={handleClick}>ajouter</button>
        <img src="" alt="" />
        { profils.map((profil, index) => {
            <h2 key={index}>{profil.nom}</h2>
        }) }
    </>
}

jsx => html / xml / js 

react => js => []

[].map() => enrichir le tableau
[].filter() => supprimer certains éléments 
[].reduce() => transformer le tableau en une valeur unique 