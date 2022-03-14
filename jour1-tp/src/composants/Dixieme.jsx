import { useState } from "react"

export const Dixieme = () => {

    const [state, setState] = useState(10);

    return <>
        <button onClick={() => setState(state - 2)}>Diminuer - 2</button>
        <span>{state}</span>
        <button onClick={() => setState(state + 7)}>Augmenter +7</button>
    </>
}