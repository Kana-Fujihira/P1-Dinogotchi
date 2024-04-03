

import './App.css'
import DinoGotchi from '../src/components/DinoGotchi';
import Credit from '../src/components/Credit'
import DinoAngry from '../src/images-dino/dino-angry.jpg'
import DinoHome from '../src/images-dino/dino-home.jpg'
import DinoEat from '../src/images-dino/dino-eat.jpg'
import { useState } from 'react';





function App() {
  const [dino, setDino] = useState(0);

  const dinoGotchi = [
    {
      image: DinoHome,
    },
    {
      image: DinoEat,
      dinoEmotion: "I am full",
    },
    {
      image: DinoAngry,
      dinoEmotion: "I am happy",
    }
  ]

  return (

    <div>
      <h1>DinoGotchi</h1>
      <DinoGotchi image={dinoGotchi[0]} />
    
      <Credit />
    </div>
  );
}

export default App;




