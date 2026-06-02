import './App.css'
import { Recipe } from './components/Recipe'
import IcedBrownSugar from './assets/IcedBrownSugarOat.webp'
import CafeMocha_CS from './assets/CafeMocha_CS.webp'

function App() {
  return (
    <>
      <h1 id="main-title">Receitas Starbucks</h1>
      <Recipe
        imageSrc={IcedBrownSugar}
        imageSize={250}
        coffee={{
          name: 'Iced Brown Sugar Oat Latte',
          description: 'Doce e delicioso',
          preparationTime: 7
        }}
      />
      <Recipe
        imageSrc={CafeMocha_CS}
        coffee={{
          name: 'Café Mocha',
          description: 'Um clássico Starbucks',
          preparationTime: 19
        }}
      />
    </>
  )
}

export default App
