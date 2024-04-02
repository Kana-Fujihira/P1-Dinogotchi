

import './App.css'
import DinoGotchi from '../src/components/DinoGotchi';
import Credit from '../src/components/Credit';
import dinoGotchi.image from 'P1-Dinogotchi/dinogotchi/src/images-dino'

const dinoGotchi = [
  {
    image: 'P1-Dinogotchi/dinogotchi/src/images-dino/dino-angry.jpg'
  },
  {
    image: "P1-Dinogotchi/dinogotchi/src/images dino/dino-eat.jpg",
  },
  {
    image: "",
  }
]

function App() {

  return (

    <div>
      <h1>DinoGotchi</h1>
      <DinoGotchi image={dinoGotchi[0].image} />
      <Credit />
    </div>
  );
}

export default App;




