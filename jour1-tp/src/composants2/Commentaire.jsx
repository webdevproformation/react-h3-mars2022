export const Commentaire = (props) => {

    /* console.log(props.data.id);
    console.log(props.data.text); */
    const {id, text} = props.data
    return <p>
        {id} - {text}
    </p>
}