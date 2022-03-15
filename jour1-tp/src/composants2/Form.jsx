import {useState} from "react"

export const Form = () => {
    const [form, setForm] = useState({email : "" , commentaire : ""})

    function handleChange(e){
        // récupérer la valeur saisie en fonction du champ 
        console.log(e.target.name); 
        console.log(e.target.value); 
        const { name , value } = e.target ;
        // exécuter un setForm => mise à jour du state => relancer un render 
        setForm({...form , [name]: value});
    }
    function handleSubmit(e){
        e.preventDefault(); //  bloquer le rechargement de page 
        const {email, commentaire} = form ;
        if(email.length > 0 && commentaire.length > 0){
            console.log(form);
            setForm({email : "" , commentaire : ""}) // vider le formulaire
        }else {
            alert("veuillez compléter les deux champs ")
        }
    }

    return <div className="col-4">
        <h2>Formulaire de contact</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" name="email" value={form.email} onChange={handleChange} />
            <textarea  id="" cols="30" rows="10"  className="form-control my-3" name="commentaire" onChange={handleChange} value={form.commentaire}></textarea>
            <input type="submit" className="btn btn-outline-dark" />
        </form>
    </div>
}

// récupérer les valeurs saisies dans le formulaire 
// 1 state qui permet de stocker les valeurs dans le formulaire 
// 2 modifier le html input / textarea 
//    - name 
//    - onChange 
//    - value 
// 3 value={state.nom}
// 4 onChange={fonction}
// 5 submit  
