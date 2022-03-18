import { render , fireEvent } from "@testing-library/react";

import { Exo } from "../composants/Exo"

describe("exécuter le composant Exo et soumettre son formulaire" , () => {
    test("remplir le formulaire du composant" , () => {
        const {container } = render(<Exo />)
        const nom = container.querySelector("#nom");
        const email = container.querySelector("#email");
        const commentaire = container.querySelector("#commentaire");
        const btn = container.querySelector("#envoyer");
        const resultat = container.querySelector("#resultat"); // {}

        fireEvent.change(nom , {target: {value : "alain"}})
        fireEvent.change(email , {target: {value : "alain@yahoo.fr"}})
        fireEvent.change(commentaire , {target: {value : "commentaire"}})
        fireEvent.submit(btn)

        expect(resultat.textContent).toMatch(/alain/)
        expect(resultat.textContent).toMatch(/alain@yahoo.fr/)
        expect(resultat.textContent).toMatch(/commentaire/)
    })
})
