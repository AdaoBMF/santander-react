import './App.css'
import { Recipe } from './components/Recipe'
import IcedBrownSugar from './assets/IcedBrownSugarOat.webp'
import CafeMocha_CS from './assets/CafeMocha_CS.webp'
import Iced_Caramel_Macchiato from './assets/Iced_Caramel_Macchiato.webp'
import Sparkling_Mint from './assets/Sparkling_Mint.webp'
import strawberry_late from './assets/strawberry_late.webp'
import IcedCappuccino from './assets/IcedCappuccino.webp'
import { Coffee } from './components/Coffee'

function App() {
  return (
    <>
      <h1 id="main-title">Receitas Starbucks®</h1>
      <div className="recipe-list">
        <Recipe
          onClick={() =>
            alert('Poderia ser uma receita de Iced Brown tchaca-tchaca aqui...')
          }
          id="Iced-Brown-Sugar-Oat-Latte"
        >
          <Coffee
            imageSrc={IcedBrownSugar}
            coffee={{
              name: 'Iced Brown Sugar Oat Latte',
              description: 'Doce e delicioso',
              preparationTime: 7
            }}
          />
        </Recipe>
        <Recipe>
          <Coffee
            imageSrc={IcedBrownSugar}
            coffee={{
              name: 'Iced Brown Sugar Oat Latte',
              description: 'Doce e delicioso',
              preparationTime: 7
            }}
          />
        </Recipe>
        <Recipe>
          <Coffee
            imageSrc={Iced_Caramel_Macchiato}
            coffee={{
              name: 'Iced Caramel Macchiato',
              description: 'Rico e com um toque de baunilha',
              preparationTime: 3
            }}
          />
        </Recipe>
        <Recipe>
          <Coffee
            imageSrc={Sparkling_Mint}
            coffee={{
              name: 'Sparkling Mint',
              description: 'Um toque brilhante',
              preparationTime: 3
            }}
          />
        </Recipe>
        <Recipe>
          <Coffee
            imageSrc={strawberry_late}
            coffee={{
              name: 'Strawberry Late',
              description: 'Um carimbo da Starbucks®',
              preparationTime: 5
            }}
          />
        </Recipe>
        <Recipe>
          <Coffee
            imageSrc={IcedCappuccino}
            coffee={{
              name: 'Iced Cappuccino ',
              description: 'Refrescante Cool',
              preparationTime: 4
            }}
          />
        </Recipe>
      </div>
    </>
  )
}

export default App
