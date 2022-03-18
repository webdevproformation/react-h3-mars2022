import { useState } from "react"


export const Exo = () => {
    const [resultat , setResultat] = useState([]);
    const [form , setForm] = useState({nom : "" , email : "" , commentaire : "" , id : ""})
    function handleChange(e){
        const {name , value} = e.target
        setForm({...form, [name]:value})
    }
    function handleSubmit(e){
        e.preventDefault();
        const cloneForm = {...form, id : Date.now()}
        setResultat([...resultat, cloneForm]) // remplir le state de resultat + refresh de notre composant 
        setForm({nom : "" , email : "" , commentaire : "" , id : ""})
        // vider le formulaire => reset()
    }

    function handleClick(id){
        const cloneResultat = resultat.filter( article => { return article.id != id } )
        setResultat(cloneResultat);
    }
    return <>
        <h1>Exo</h1>
        <form onSubmit={handleSubmit} className="exo">
            <input type="text" value={form.nom} name="nom" onChange={handleChange} />
            <input type="email" value={form.email} name="email" onChange={handleChange} />
            <textarea value={form.commentaire} name="commentaire" onChange={handleChange}></textarea>
            <div>
                <input type="submit"  />
            </div>
        </form>
        <div>
            {resultat.map( (article, index) => {
                return <article key={index}>
                    <h2>{article.nom}</h2>
                    <p>id {article.id}</p>
                    <ul>
                        <li>email : {article.email}</li>
                        <li>commentaire : {article.commentaire}</li>
                    </ul>
                    <button  onClick={() => handleClick(article.id)}>supprimer</button>
                </article>
            } )}
        </div>
    </>
}