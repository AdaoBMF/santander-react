import { TopSaleCoffee } from './components/TopSaleCoffee'
import { v4 as uuidV4 } from 'uuid'

interface Coffee {
  id: string
  name: string
  description: string
  preparationTime: number
  isTopSale?: boolean
}
const coffees: Coffee[] = [
  {
    id: uuidV4(),
    name: 'Iced Caramel Macchiato',
    description: 'Rico e com um toque de baunilha',
    preparationTime: 3
  },
  {
    id: uuidV4(),
    name: 'Caffé Mocha',
    description: 'Um clássico Starbucks',
    preparationTime: 3,
    isTopSale: true
  },
  {
    id: uuidV4(),
    name: 'Starbucks Blond Vanilla Late',
    description: 'Suave e aveludado',
    preparationTime: 7
  },
  {
    id: uuidV4(),
    name: 'Sparkling Expresso',
    description: 'Um toque brilhante',
    preparationTime: 1,
    isTopSale: true
  },
  {
    id: uuidV4(),
    name: 'Affogato',
    description: 'Refrescante equilibrado',
    preparationTime: 19
  }
]
export function List() {
  const topSale = coffees.filter(coffee => coffee.isTopSale)
  const defaultCoffees = coffees.filter(coffee => !coffee.isTopSale)
  const listItems: React.JSX.Element[] = defaultCoffees.map(coffee => (
    <li key={coffee.id}>{coffee.name}</li>
  ))

  return (
    <>
      <h3 style={{ textAlign: 'left' }}>Os mais vendidos</h3>
      <div style={{ textAlign: 'left' }}>
        {topSale.map(c => (
          <TopSaleCoffee key={c.id} name={c.name} description={c.description} />
        ))}
      </div>

      <h3 style={{ textAlign: 'left' }}>Outros cafés</h3>

      <ul style={{ textAlign: 'left' }}>{listItems}</ul>
    </>
  )
}
