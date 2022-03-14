export const Quatrieme = () => {
    const data = [
        { id : 1 , titre : "Article1" , dt_creation : new Date() },
        { id : 2 , titre : "Article2" , dt_creation : new Date() }
    ]
    return <>
        { data.map( (article , index) => {
            return <article key={index}>
                <h2>{article.titre}</h2>
                <time>publié le { `${article.dt_creation.getDate()}/${ ( "0" + ( article.dt_creation.getMonth() +1)  ).slice(-2) }/${article.dt_creation.getFullYear()}` }</time>
            </article>
        } )}
    </>
}

// "012".slice(-2) => 12