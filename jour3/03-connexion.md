dans le composant Connexion

ajouter un formulaire qui contient 2 champs 

login / password 

=> useState({login : "" , password : ""})

import {useState} from "react"

export const Connexion = () => {
	const [form, setForm] = useState({login : "", password : ""})
    function handleChange(e){
		const {name , value} = e.target ;
        setForm({...form , [name] : value})
    }
    function handleSubmit(e){
    	e.preventDefault()
        console.log(form)
    }
	return <>
	   <form onSubmit={handleSubmit}>
		<input type="text" name="login" value={form.login} onChange={handleChange} />
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
}

<Article titre="premier article" />

function Article (props){
    return props.titre
}

<Article>premier article</Article>

function Article (props){
    return props.children
}