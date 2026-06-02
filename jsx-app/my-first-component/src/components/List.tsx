interface ListDetails {
  name: string
  date: React.ReactNode
}

export const List = () => {
  const name = 'Adão'

  function formatDate(date: Date): React.ReactNode {
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long'
    }).format(date)
  }
  const listDetails: ListDetails = {
    name,
    date: formatDate(new Date())
  }

  return (
    <>
      <h2>Lista de compras de {listDetails.name}</h2>
      <p>Dia da feira: {listDetails['date']}</p>
      <ul
        className="list"
        style={{ color: 'darkcyan', backgroundColor: 'lightgray' }}
      >
        <li>Banana</li>
        <li>Maçã</li>
        <li>Couve</li>
        <li>Alface</li>
        <li>Tomate</li>
        <li>Batata</li>
      </ul>
    </>
  )
}
