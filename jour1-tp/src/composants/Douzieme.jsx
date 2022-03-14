import { useState } from "react"
export const Douzieme = () => {
    const [list, setList] = useState([]);
    const handleClick = () => {
        const cloneList = [...list];
        //cloneList.push(Math.random());
        cloneList.unshift(Math.random());
        setList(cloneList);
    }
    return <>
        <button onClick={handleClick}>Ajouter un élément à la liste</button>
        <ul>
            {list.length > 0 &&  list.map((item , index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </>
}