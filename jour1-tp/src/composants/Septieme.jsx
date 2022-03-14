export function Septieme (){

    // créer une fonction 
    // ajouter son nom dans le onClick de la vue 
    function action1(){
        alert("je viens de cliquer sur le bouton 1")
    }

    function action3(){
        // factory
        return () => { alert("je viens de cliquer sur le bouton 3") }
    }
    return <>
        <button onClick={action1}>Action</button>
        <button onClick={() => { alert("j'ai cliqué sur le bouton 2")}}>Action 2</button>
        <button onClick={action3()}>Action 3</button>
    </>
}