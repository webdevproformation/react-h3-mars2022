import { useEffect, useState } from "react"

export const Treizieme = () => {
 const [req, setReq] = useState({
     erreur : "",
     lodding : true ,
     data : []
 });

 // remplir article avec le résultat d'une requête ajax 
 // sideEffect
 // https://jsonplaceholder.typicode.com/
 useEffect( () => {
     // syntaxe Promise
     fetch("https://jsonplaceholder.typicode.com/posts")
        .then( reponse => reponse.json() )
        .then( data  => setReq({
            ...req , 
            erreur : "",
            lodding : false ,
            data : data
        }) )
        .catch( ex => setReq({
            ...req ,
            erreur : ex.message ,
            lodding : false ,
            data : []
        }) )
 } , [] );

 return <>
    {!req.lodding && req.erreur.length === 0 ? req.data.map((article, index) => {
        return <article key={index}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </article>
    }) : <p> { req.erreur } </p>}
 </>
}