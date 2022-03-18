
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

