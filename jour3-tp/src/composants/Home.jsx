import { useState } from "react"
import { Article } from "./Article";
export const Home = () => {
    const [tableau, setTableau] = useState({
        articles : [
          {id : 1 , titre : "Article 1"},
          {id : 2 , titre : "Article 2"}
      ]
      })
      const {articles} = tableau;
    function handleClick(id){
      const tableauFiltre = articles.filter(article => { return article.id != id} )
      setTableau({...tableau , articles : tableauFiltre});
    }
    return <>
    {tableau.articles.map((article , index) => {
          return <Article article={article} key={index} handleClick={handleClick}/>
        } )}
    </>
}