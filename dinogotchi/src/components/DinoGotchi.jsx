import { useState } from 'react'

function DinoGotchi({ image }) {

    const [heart, setHeart] = useState(0)
    const handleHeart = () => {
        setHeart(heart + 1);
    }
    function happyDinosor() {
        handleHeart(heart >= 10 ? image.dinoGotchi[2][0] : image.dinoGotchi[0][0]);
    }

    const [cookie, setCookie] = useState(0)
    const handleCookie = () => {
        setCookie(cookie + 1);
    }
    function fullDinosor() {
        handleCookie(cookie >= 10 ? image.dinoGotchi[1][0] : image.dinoGotchi[0][0]);
    }

    return (
        <>
            <figure>
                <img src="./src/images-dino/dino-home.jpg"></img>
            <button onClick={happyDinosor}>❤️{heart}</button>
            <button onClick={fullDinosor}>🍴{cookie}</button>
        </figure>
</>
    );
}


export default DinoGotchi;


