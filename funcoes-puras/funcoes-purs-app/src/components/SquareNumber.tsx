interface Props {
  number: number
}

export function SquareNumber({ number }: Props) {
  function SquareNumber(n: number): number {
    return Math.pow(n, 2)
  }
  return (
    <p>
      <b>Número ao quadrado</b>: {SquareNumber(number)}
    </p>
  )
}
