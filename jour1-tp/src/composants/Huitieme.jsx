export const Huitieme = () => {

    const handleClick = (e) => {
        console.log(e.target.src);
    }

    return <img src="https://via.placeholder.com/200x100" alt=""  onClick={handleClick}/>
}