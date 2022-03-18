import { add , valeurAbsolue } from "../lib/crud"

// réaliser un test unitaire
function addition( a, b  ){
    if(typeof a == "number" && typeof b == "number"){
        return a + b ;
    }
    return 0 ;
}

function majuscule(text){
    if(text.length === 0) return "" ;
    return `${text[0].toUpperCase()}${text.slice(1,text.length).toLowerCase()}`
}

describe("fonction valeurAbsolue" , () => {

    test("doit retourner 1 si on lui donne 1" , () => {
        const resultat = valeurAbsolue(1)
        expect(resultat).toEqual(1)
    })
    test("doit retourner -1 si on lui donne 1" , () => {
        const resultat = valeurAbsolue(-1)
        expect(resultat).toEqual(1)
    })
    test("doit retourner 0 si on lui donne 0 ou a []" , () => {
        let resultat = valeurAbsolue(0)
        expect(resultat).toEqual(0)
        resultat = valeurAbsolue("a")
        expect(resultat).toEqual(0)
        resultat = valeurAbsolue([])
        expect(resultat).toEqual(0)
    })

})

describe("fonction add de crud.js" , () => {
    it("doit retourner une tableau avec un élément" , () => {
        const resultat = add([] , "élément");
        expect(resultat.length).toBe(1);
        expect(resultat).toContain("élément")
        expect(resultat).toEqual(expect.arrayContaining(["élément"]))
    })
})

describe("fonction majuscule" , () => {
    it("doit retourner Alain si on lui donne alain", () => {
        const resultat = majuscule("alain")
        expect(resultat).toBe("Alain");
    })

    it("doit retourner Alain si on lui donne ALAIN", () => {
        const resultat = majuscule("ALAIN")
        expect(resultat).toBe("Alain");
    })

    it("doit retourner rien si on lui donne rien", () => {
        const resultat = majuscule("")
        expect(resultat).toBe("");
    })
})


describe("découverte de la librairie de test jest" , () => {

    test("la fonction addition doit retourner 2", () => {
        const resultat = addition(1,1);
        // assertion  ..... matcher()
        expect(resultat).toBe(2);
    })

    test("la fonction addition je passe texte doit  retourner 0", () => {
        const resultat = addition("a",1);
        expect(resultat).toBe(0);
    })

})

