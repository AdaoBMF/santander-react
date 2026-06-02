interface Props {
  imageSrc: string
  imageSize?: number
  coffee: {
    name: string
    description: string
    preparationTime?: number
  }
}

export function Recipe({ imageSrc, coffee, imageSize = 170 }: Props) {
  return (
    <>
      <img src={imageSrc} alt={coffee.name} width={imageSize} />
      <h2 className="recipe-title">{coffee.name}</h2>
      <p className="recipe-description">{coffee.description}</p>
      <p className="recipe-description">
        <b>Tempo de preparo</b>: {coffee.preparationTime}
      </p>
    </>
  )
}
