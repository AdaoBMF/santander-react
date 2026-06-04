interface TopSaleCoffee {
  name: string
  description: string
}
export function TopSaleCoffee({ name, description }: TopSaleCoffee) {
  return (
    <div className="top-sale-item">
      <p>
        {name} - {description}
      </p>
    </div>
  )
}
