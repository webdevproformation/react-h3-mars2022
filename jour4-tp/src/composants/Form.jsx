import { useState } from "react"

export const Form = () => {
    const [articles, setArticles] = useState([]);
    const [form, setForm] = useState({titre : "" , contenu : ""})
    function handleChange(e){
        const {name , value} = e.target ;
        setForm({...form , [name]: value})
    }
    function handleSubmit(e){ // exécuter lorsque l'on clique sur le bouton submit du formulaire => 
        e.preventDefault(); // permet de bloquer le rechargement automatique 
        const cloneArticles = [...articles , form];
        setArticles(cloneArticles);
    }
    return <>
        <h1>CRUD</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" name="titre" value={form.titre} onChange={handleChange} />
            <input type="text" name="contenu" value={form.contenu} onChange={handleChange} />
            <input type="submit" />
        </form>
        <div>
            {JSON.stringify(articles)}
            {articles.map((article, index) => {
                return <article key={index}>
                    <h2>{article.titre}</h2>
                    <p>{article.contenu}</p>
                </article>
            })}
        </div>
    </>
}