import { useState } from "react" // hook => crochet 

// erreur => OBLIGATOIREMENT dans un composant fonctionnel
//const resultat = useState()

export const Neuvieme = () => {

    /* const resultat = useState(0)
    const chiffre = resultat[0];
    const setChiffre = resultat[1]; */
    const [chiffre , setChiffre] = useState(0)
    // resultat = [ state , setState ]
    // state => valeur 
    // setState => fonction qui permet de modifier la valeur de state ET réaliser un rerender du composant
    // erreur
    /* function(){
        useState()
    } */

    // erreur 
    /* if(){
        useState()
    } */
    function handleClick(){
        setChiffre(chiffre + 1)
        // modifier la valeur de chiffre 
        // ET relancer un render du composant Neuvieme
    }
    return <>
        <button onClick={handleClick}>Augmenter</button>
        <p>{chiffre}</p>
    </>
}


/* function useState(param = null){
    // ....
    return [
        param , 
        () => { }
    ]
} */

