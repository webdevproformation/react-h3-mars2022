import { render , fireEvent , screen } from "@testing-library/react";

import { Exo } from "../composants/Exo"

function remplirForm(container){
    const nom = container.querySelector("#nom");
    const email = container.querySelector("#email");
    const commentaire = container.querySelector("#commentaire");
    const btn = container.querySelector("#envoyer");
    const resultat = container.querySelector("#resultat"); // {}

    fireEvent.change(nom , {target: {value : "alain"}})
    fireEvent.change(email , {target: {value : "alain@yahoo.fr"}})
    fireEvent.change(commentaire , {target: {value : "commentaire"}})
    fireEvent.submit(btn)
    return resultat ; 
}

describe("exécuter le composant Exo et soumettre son formulaire" , () => {
    test("remplir le formulaire du composant" , () => {
        const {container } = render(<Exo />)
        
        const resultat = remplirForm(container)

        expect(resultat.textContent).toMatch(/alain/)
        expect(resultat.textContent).toMatch(/alain@yahoo.fr/)
        expect(resultat.textContent).toMatch(/commentaire/)
    })

    test("remplir deux fois le formulaire du composant puis supprimer le dernier " , () => {
        const {container } = render(<Exo />)
        
        remplirForm(container)
        const resultat =  remplirForm(container)

        const btns  = screen.getAllByRole("button")

        fireEvent.click(btns[2]) // supprimer le dernier élément

        expect(resultat.textContent).toMatch(/alain@yahoo.fr/);
    })
})
