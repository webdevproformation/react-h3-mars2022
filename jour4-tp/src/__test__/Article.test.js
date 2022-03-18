import { render , screen } from "@testing-library/react"
import { Article } from "../composants/Article";

// navigateur headless 
// premier test d'intégration 

describe("tester le composant Article" , () => {
    test("le composant doit contenir une balise h1 contenant le texte titre principal" , () => {
        const {container }  = render(<Article />)
        const resultat = container.querySelector("h1")
        expect(resultat).toBeInTheDocument()
        expect(resultat.innerHTML ).toBe("titre principal")
    })  

    test("le composant doit contenu une balise p contenant le texte lorem ipsum" , ()=> {
        const {container }  = render(<Article />)
        const resultat = container.querySelector("p")
        expect(resultat).toBeInTheDocument()
        expect(resultat.innerHTML ).toBe("lorem ipsum")
    })
    
})