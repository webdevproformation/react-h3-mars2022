import {render , fireEvent , screen} from "@testing-library/react"

import { Exo2 } from "../composants/Exo2"

describe("tester le composant Exo2" , () => {
    test("supprimer le deuxième produit et vérifier qu'il n'est plus présent dans le DOM" , ()=> {
        const {container} = render(<Exo2 />)
        const btns = screen.getAllByRole("button")
        fireEvent.click(btns[1]); // clique sur le 2ème bouton dans l'écran
        expect(container.textContent).not.toMatch(/Produit 2/);
    })
}) 