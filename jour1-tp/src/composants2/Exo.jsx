import {useState} from "react"

export const Exo = () => {
    const [form, setForm] = useState({nom : "" , age : "" , pays : ""})

    function handleChange(e){
        // récupérer la valeur saisie en fonction du champ 
        /* console.log(e.target.name); 
        console.log(e.target.value);  */
        const { name , value } = e.target ;
        // exécuter un setForm => mise à jour du state => relancer un render 
        setForm({...form , [name]: value});
    }
    function handleSubmit(e){
        e.preventDefault(); //  bloquer le rechargement de page 
        console.log(form)
        const {nom, age , pays} = form ;
        if(nom.length > 0 && age.length > 0 && pays.length > 0){
            //console.log(form);
            setForm({nom : "" , age : "" , pays : ""}) // vider le formulaire
        }else {
            alert("veuillez compléter tous les champs ")
        }
    }

    return <div className="col-4">
        <h2>Exo</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" name="nom" value={form.nom} onChange={handleChange} />
            <input type="text" className="form-control my-4" name="age" value={form.age} onChange={handleChange} />
            <select name="pays" id="" value={form.pays} onChange={handleChange} className="form-select mb-3">
                <option value="">veuillez sélectionner un pays</option>
                <option value="france">france</option>
                <option value="allemagne">allemagne</option>
                <option value="belgique">belgique</option>
            </select>
            <input type="submit" className="btn btn-outline-dark" />
        </form>
    </div>
} 
