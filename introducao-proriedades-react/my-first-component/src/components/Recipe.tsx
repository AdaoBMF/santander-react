import { PropsWithChildren } from 'react'

interface RecipeProps {
  onClick?: () => void
  id?: string
}

export function Recipe({
  children,
  onClick,
  id
}: PropsWithChildren<RecipeProps>) {
  function handleClick() {
    if (onClick) onClick()
  }

  return (
    <div className="recipe-card" id={id ? `recipe-card-${id}` : undefined}>
      {children}
      <button onClick={handleClick} className="recipe-button">
        Ver Receita
      </button>
    </div>
  )
}
