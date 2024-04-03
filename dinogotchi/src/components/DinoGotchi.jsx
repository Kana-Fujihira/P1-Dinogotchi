import { useState } from 'react'
// import DinoHome from "dinogotchi/src/images-dino/dino-home.jpg"
 

function DinoGotchi() {
    
//     const dinoGotchi = [
//     {
//     src: DinoHome
//   },
//   {
//     image:dino-angry,
//     src:"dinogotchi/src/images-dino/dino-angry.jpg"
//   },

//   {
//     image:dino-eat,
//     src:"dinogotchi/src/images-dino/dino-eat.jpg"
//   },
//   {
//     image:dino-happy,
//     src:"dinogotchi/src/images-dino/dino-happy.jpg"
//   }
// ]
    const [happy, setHappy]=useState(true){
        setHappy(happy=false)
    }
    
    const [heart, setHeart] = useState(0)
    const handleHeart = () => {
        setHeart(heart + 1);
    }
    function happyDinosor() {
        handleHeart(heart >= 10 && (<img src="./images-dino/dino-angry" />));
    }


    const [cookie, setCookie] = useState(0)
    const handleCookie = () => {
        setCookie(cookie + 1);
        setHappy(happy=false);
    }
    function fullDinosor() {
        handleCookie(cookie === 10 && (<img src="https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png" />));
    }

    return (
        <>
            <figure>
                <img src= "./src/images-dino/dino-home.jpg"></img>
                <button onClick={happyDinosor}>❤️{heart}</button>
                <button onClick={fullDinosor}>🍴{cookie}</button>
            </figure>
        </>
    );
}



export default DinoGotchi;


