import {useState} from "react"
import { Commentaire } from "./Commentaire"

export const Article = () => {
    const [data , setData] = useState({
        id : 1 ,
        titre : "Article 1",
        contenu : "lorem ipsum",
        commentaires : [
            {id : 1, text : "premier commentaire"},
            {id : 2 , text : "super article"}
        ]
    })
    return <article className="col-4">
        <h2>{data.titre}</h2>
        <p>{data.contenu}</p>
        <ul>
            {data.commentaires.map( (commentaire, index) => {
                return <Commentaire key={index} data={commentaire} />
                {/** props data={commentaire}
                Commentaire({id : 1, text : "premier commentaire"})
            */}
            } )}
        </ul>
    </article>
}