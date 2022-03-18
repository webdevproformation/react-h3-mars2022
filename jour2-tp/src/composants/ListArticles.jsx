export function ListArticles ({articles, deleteArticle}){

    return <section>
        {articles.map((article, index)=> {
            return <article key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                    <button onClick={() => deleteArticle(article.id)}>Supprimer</button>
                </article>
        })}
    </section>
}