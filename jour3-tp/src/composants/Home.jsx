import { useContext } from "react"
import { ArticleContext } from "../context/articleContext";

import { Article } from "./Article";
export const Home = () => {

    const { articles } = useContext(ArticleContext)
    //console.log(articles);
    /* function handleClick(id){
      const tableauFiltre = articles.filter(article => { return article.id != id} )
      setTableau({...articles , articles : tableauFiltre});
    } */
    return <section className="articles">
    {articles.map((article , index) => {
          return <Article article={article} key={index} /* handleClick={handleClick} *//>
        } )}
    </section>
}