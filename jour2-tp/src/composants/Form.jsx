import {useState} from "react"
export function Form ({addArticle}){
    const [show, setShow]= useState(false)
    const [form, setForm] = useState({title : "", body : ""})
    function handleSubmit(e){
        e.preventDefault();
        if(form.title.length > 0 && form.body.length > 0){
            addArticle({...form , id : Date.now()})
            setForm({title : "", body : ""})
        }else {
            alert("veuillez compléter les deux champs du formulaire")
        }
    }

    function handleChange(e){
        const {name, value} = e.target
        setForm({...form , [name]:value})
    }
    return<>
        <button onClick={() => setShow(!show)}>{!show ? "Afficher" : "Masquer" } le formulaire </button>
        {show && <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title de l'article" value={form.title} onChange={handleChange} name="title"/>
            <textarea name="body" placeholder="body de l'article" rows="5" value={form.body} onChange={handleChange} ></textarea>
            <div>
                <input type="submit" value="créer nouvel article"/>
            </div>
        </form>}
    </>
}