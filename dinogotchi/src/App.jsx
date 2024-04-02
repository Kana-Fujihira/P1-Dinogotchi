
import { useState } from 'react'
import './App.css'

const dinoGotchi = [
  {
    imageSrc: "P1-Dinogotchi\dinogotchi\src\images dino\dino-home.jpg",
    dinoEmotion: "Standard",
  },
  {
    imageSrc: "P1-Dinogotchi\dinogotchi\src\images dino\dino-eat.jpg",
    dinoEmotion: "I am full",
  },
  {
    imageSrc: ""
  dinoEmotion: "I am happy",
  }
]

function App() {
  
  return (
    <div>
      <h1>DinoGotchi</h1>
    </div>
    <div>
      <Dinogotchi/>
    </div>
    <div>
      
    </div>
  );
}

export default App;


//// mettre cette functiondans component dinogotchi 
const [heart, setHeart] = useState(0)
function handleHeart() {
  setHeart(heart = 10 ? imgSrc.dinoGotchi[2][0] : imgSrc.dinoGotchi[0][0]);
}

const [cookie, setCookie] = useState(0)
function handleCookie() {
  setCookie(cookie = 10 ? imgSrc.dinoGotchi[1][0] : imgSrc.dinoGotchi[0][0]);
}

<button onClick={handleHeart}>Manger </button>
<button onClick={handleCookie}>Caliner</button>
// import DinoGotchi from "../src/components/DinoGotchi"

