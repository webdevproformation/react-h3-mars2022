export const Sixieme = () => {
    const users = [
        { id : 1 , nom : "Alain" , isAdmin : true },
        { id : 2 , nom : "Mario" , isAdmin : false },
    ]
    return <>
        {users.map((user, index) => {
            return  <ul key={index}>
                <li>{user.nom}</li>
                <li>{user.isAdmin ? "est le gestionnaire du site" : "n'est pas le gestionnaire du site"}</li>
            </ul>
        } )}
    </>
}
