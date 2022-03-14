//import { Fragment } from "react"
import React from "react"


export const Deuxieme = () => {
    const data = ["lundi", "mardi"];

    return <>
    <h1>reprise après midi</h1>
    <ul>
        <li>{data[0]}</li>
        <li>{data[1]}</li>
    </ul>
    {/** balise qui va permettre d'emballer */}
    </>
}