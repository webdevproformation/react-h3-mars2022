export const Cinquieme = ( ) => {
    const verif = false ;

    function afficherP(){
        if(verif ){
            return <p>la variable verif est vraie méthode 2</p>
        }
    }
    return <>
        {/** premier syntaxe */}
        {verif && <p>la variable verif est vraie</p>}
        {/** deuxieme syntaxe */}
        {afficherP()}
        {/** troisième et dernière syntaxe */}
        {verif ? <p>la variable verif est vraie méthode 3</p> : ""}
    </>

}

