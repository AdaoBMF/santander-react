interface Coffee {
  name: string
  description: string
  preparationTime: number
  isTopSale?: boolean
}
const coffees: Coffee[] = [
  {
    name: 'Iced Caramel Macchiato',
    description: 'Rico e com um toque de baunilha',
    preparationTime: 3
  },
  {
    name: 'Caffé Mocha',
    description: 'Um clássico Starbucks',
    preparationTime: 3,
    isTopSale: true
  },
  {
    name: 'Starbucks Blond Vanilla Late',
    description: 'Suave e aveludado',
    preparationTime: 7
  },
  {
    name: 'Sparkling Expresso',
    description: 'Um toque brilhante',
    preparationTime: 1,
    isTopSale: true
  },
  {
    name: 'Affogato',
    description: 'Refrescante equilibrado',
    preparationTime: 19
  }
]
export function List() {
  const listItems: React.JSX.Element[] = coffees.map(coffee => (
    <li>{coffee.name}</li>
  ))
  const topSale = coffees.filter(coffee => coffee.isTopSale)
  const prepTime3min = coffees.filter(c => c.preparationTime === 3)

  console.log({ topSale })
  console.log(prepTime3min)
  return (
    <>
      <h3>Os mais vendidos</h3>
      {topSale.map(c => (
        <p>{c.name}</p>
      ))}

      <ul style={{ textAlign: 'left' }}>{listItems}</ul>
    </>
  )
}
