import { remise , calculRemise } from "../lib/crud"


describe("tester la fonction remise" , () => {
    it("doit retourner une remise du 10 %", ()=> {
       /*  jest.spyOn(global, "calculRemise").mockImplementation(() => {
            return 20
        }) */
        const calculRemise = jest.fn().mockReturnValue(20) 
        const profil = {id : 1 , nom : "alain" , nb : 20 , montant : 100}
        const resultat = remise(profil)
        // console.log(resultat)
    })
})