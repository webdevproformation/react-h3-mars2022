import { useState , useContext } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"
export const Connexion = () => {
    const profil  = useContext(UserContext)
    const navigate = useNavigate();
    const [form , setForm] = useState({login : "" , password : ""})
    function handleChange(e){
        const {name , value} = e.target;
        setForm({...form , [name] : value})
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(form);
        if(form.login === profil.login && form.password === profil.password){
            // alert("vos identifiants sont corrects !!")
            profil.setProfil((prevProfil) => {
                const cloneProfil = {...prevProfil , isLogged : true , password : "toto"}
                localStorage.setItem("profil" , JSON.stringify(cloneProfil))
                return cloneProfil; 
            })
            navigate("/admin"); // <?php header("Location:admin.php")
            console.log(profil)
        }
    }
    return <div>
        <h1>Accéder au Back office</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="login" value={form.login} onChange={handleChange} placeholder="login"/>
            <input type="text" name="password" value={form.password} onChange={handleChange} placeholder="mot de passe"/>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
}