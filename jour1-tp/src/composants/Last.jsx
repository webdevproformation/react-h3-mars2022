import {useState, useEffect } from "react"

export const Last = () => {
    const [profils , setProfils] = useState([]) 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(reponse => reponse.json())
        .then(data => setProfils(data))
    } , [])
    return <>
        {/*JSON.stringify(profils , null , " ")*/}
        {/** JSON.stringify() => console.log() react  */}
        {profils.map( (profil , index) => {
            return <article key={index}>
                <h2>{profil.name}</h2>
                <p>{profil.email}</p>
            </article>
        } )}
    </>
}