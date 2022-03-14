// boucle 
// condition if

export const Troisieme = () => {
    const budget = [
        {id : 1 , nom : "TV" , prix : 20 },
        {id : 2 , nom : "Nintendo" , prix : 130 },
        {id : 3 , nom : "PlayStation" , prix : 200 },
        {id : 4 , nom : "Gameboy" , prix : 50 },
    ]

    return <ul>
        {budget.map( ( item , index ) => { 
            return <li key={index}>{item.nom } - {item.prix}</li>
        } )}
    </ul>
}