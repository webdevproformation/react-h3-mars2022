export const Quatrieme = () => {
    const data = [
        { id : 1 , titre : "Article1" , dt_creation : new Date() },
        { id : 2 , titre : "Article2" , dt_creation : new Date() }
    ]
    function dateFr(date){
        return `
            ${date.getDate()}/${ ( "0" + ( date.getMonth() +1)  ).slice(-2) }/${date.getFullYear()}`
            // %d/%m/%Y n'existe pas en Javascript 
    }

    return <>
        { data.map( (article , index) => {
            return <article key={index}>
                <h2>{article.titre}</h2>
                <time>publié le { dateFr(article.dt_creation)} </time>
            </article>
        } )}
    </>
}

// "011".slice(-2) => 12