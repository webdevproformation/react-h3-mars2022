import {useState} from "react"
import { Commentaire } from "./Commentaire"
import { FormCommentaire } from "./FormCommentaire"
import { Like } from "./Like"

export const Article = () => {
    const [data , setData] = useState({
        id : 1 ,
        titre : "Article 1",
        contenu : "lorem ipsum",
        commentaires : [
            {id : 1, text : "premier commentaire"},
            {id : 2 , text : "super article"}
        ],
        like : 10
    })
    return <article className="col-4">
        <h2>{data.titre}</h2>
        <p>{data.contenu}</p>
        <Like  setData={setData} /> <span class="badge bg-danger">{data.like}</span>
        <FormCommentaire setData={setData} />
        <ul>
            {data.commentaires.map( (commentaire, index) => {
                {/** props data={commentaire}
                Commentaire({id : 1, text : "premier commentaire"})
                */}
                return <Commentaire key={index} data={commentaire} />
            } )}
        </ul>
    </article>
}