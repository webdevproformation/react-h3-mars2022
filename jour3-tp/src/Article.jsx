export const Article = (props) => {
    return <article >
    <h2>{props.article.titre}</h2>
    <button onClick={() => props.handleClick(props.article.id)}>supprimer</button>
  </article>
}