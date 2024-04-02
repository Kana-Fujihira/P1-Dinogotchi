
import { useState } from 'react'
import './App.css'
import DinoGotchi from '../src/components/DinoGotchi';
import Button from '../src/components/Button'
import Credit from '../src/components/Credit'
// import DinoAngry from './src/images-dino/dino-angry';


// const imageHappy = ""

const dinoGotchi = [
  {
    image: "./src/images-dino/dino-angry"
  },
  {
    image: "P1-Dinogotchi/dinogotchi/src/images dino/dino-eat.jpg",
    dinoEmotion: "I am full",
  },
  {
    image: "",
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




