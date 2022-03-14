import { useState } from "react"

export const Onzieme = () => {

    const [user , setUser] = useState({nom :"Alain" , age : 10})

    function handleAugmenter(){
        /* user.age++
        setUser(user); */
        // vous devez lui passer une objet avec une référence mémoire 
        // différent que celle de user
       /*  const age = user.age + 1 ;
        setUser(age); */

        /* const cloneUser = Object.assign({} , user)
        cloneUser.age++ 
        setUser(cloneUser);  */

        // es6 
       /*  const cloneUser = {...user} // cloner
        cloneUser.age++ 
        setUser(cloneUser);
 */
        /* const cloneUser = {...user , age : user.age + 1} // cloner
        setUser(cloneUser); */
        
        setUser({...user , age : user.age + 1});
    }

    return <>
        <h1>{ user.nom }</h1>
        <p>age : {user.age}</p>
        <button onClick={handleAugmenter}>augmenter avec user</button>
        <hr />
    </>
}