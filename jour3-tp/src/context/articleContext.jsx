import {createContext , useState , useEffect } from "react"

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
    const [articles , setArticles] = useState([]);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(reponse => reponse.json())
        .then(data => setArticles(data))
    } , [])

    return <ArticleContext.Provider value={{articles : articles, setArticles}}>
        {props.children}
    </ArticleContext.Provider>
}