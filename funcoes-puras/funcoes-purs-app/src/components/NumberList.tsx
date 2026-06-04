import { DoubleNumber } from './DoubleNumber'
import { SquareNumber } from './SquareNumber'

export function NumberList() {
  const numberList = []
  for (let i = 1; i <= 19; i++) {
    numberList.push(
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 100,
            color: 'darkorange',
            padding: 2,
            backgroundColor: 'lightgray',
            border: 'solid',
            borderColor: 'darkcyan',
            borderWidth: 2,
            borderRadius: 8
          }}
        >
          <h3>
            <b>Número</b>: {i}
          </h3>

          <DoubleNumber number={i} />
          <SquareNumber number={i} />
        </div>
      </>
    )
  }
  return (
    <>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          gap: 20
        }}
      >
        {numberList}
      </div>
    </>
  )
}
