import { useState } from 'react'

function DinoGotchi() {

    const [heart, setHeart] = useState(0)
    const handleHeart = () => {
        setHeart(heart + 1);
    }
    function happyDinosor() {
        handleHeart(heart >= 10 && (<img src="https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png" />));
    }


    const [cookie, setCookie] = useState(0)
    const handleCookie = () => {
        setCookie(cookie + 1);
    }
    function fullDinosor() {
        handleCookie(cookie === 10 && (<img src="https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png" />));
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


