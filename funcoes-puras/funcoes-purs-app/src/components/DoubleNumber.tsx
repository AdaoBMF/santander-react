interface Props {
  number: number
}

export function DoubleNumber({ number }: Props) {
  function doubleNumber(n: number): number {
    return n * 2
  }
  return (
    <p>
      <b>Dobro do número</b>: {doubleNumber(number)}
    </p>
  )
}
