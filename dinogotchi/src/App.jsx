
import { useState } from 'react'
import './App.css'
import DinoGotchi from '../src/components/DinoGotchi';
import Button from '../src/components/Button'
import Credit from '../src/components/Credit'

const dinoGotchi = [
  {
    imageSrc: 'P1-Dinogotchi/dinogotchi/src/images-dino/dino-home.jpg'
  },
  {
    imageSrc: "P1-Dinogotchi/dinogotchi/src/images dino/dino-eat.jpg",
    dinoEmotion: "I am full",
  },
  {
    imageSrc: "",
    dinoEmotion: "I am happy",
  }
]

function App() {

  return (

    <div>
      <h1>DinoGotchi</h1>
      <DinoGotchi imageSrc={dinoGotchi[0].imageSrc} />
      <button>Manger</button>
      <button>Caliner</button>
      <Credit/>
    </div>
  );
}

export default App;




