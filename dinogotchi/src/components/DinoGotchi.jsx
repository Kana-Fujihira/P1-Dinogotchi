import { useState } from 'react'
import DinoAngry from '../images-dino/dino-angry.jpg'
import DinoHome from '../images-dino/dino-home.jpg'
import DinoEat from '../images-dino/dino-eat.jpg'
import DinoHappy from '../images-dino/dino-happy.jpg'
// import DinoHome from "dinogotchi/src/images-dino/dino-home.jpg"
 


function DinoGotchi() {
//       const dinoGotchi = [
//     {
//       image: DinoHome,
//     },
//     {
//       image: DinoEat,
//       dinoEmotion: "I am full",
//     },
//     {
//       image: DinoHappy,
//       dinoEmotion: "I am happy",
//     }
//   ]
    const [dino, setDino]=useState(DinoHome)
    const [heart, setHeart] = useState(0)
    const handleHeart = () => {
        setHeart(heart + 1);
    }
    function happyDinosor() {
        setDino(DinoHappy)
        handleHeart();

      
    }
    const [cookie, setCookie] = useState(0)
    const handleCookie = () => {
        setCookie(cookie + 1);
    }
    function fullDinosor() {
        setDino(DinoEat)
        handleCookie();
    }
    function angryDinosor(){
        setDino(DinoAngry)
    } 

    return (
        <>
            <figure>

                <img onClick={angryDinosor} src={dino}></img>
                <button onClick={happyDinosor}>❤️{heart}</button>
                <button onClick={fullDinosor}>🍴{cookie}</button>
            </figure>
        </>
    );
}



export default DinoGotchi;


