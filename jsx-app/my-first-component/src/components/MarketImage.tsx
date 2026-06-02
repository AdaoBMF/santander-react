import { marketImg } from '../assets/imgLinks.js'

interface ImageOptions {
  source: string
  alternative: string
  width: number
  style: object
}

export function MarketImage() {
  const imageOptions: ImageOptions = {
    source: marketImg,
    alternative: 'Market',
    width: 300,
    style: { borderRadius: 20 }
  }

  return (
    <img
      src={imageOptions.source}
      alt={imageOptions.alternative}
      width={imageOptions.width}
      style={imageOptions.style}
    />
  )
}
