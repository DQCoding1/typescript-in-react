// generics 
// molde con valor dinamico 
// para obligar a quien lo use tener la misma estructura de datos

function List<ListItem> ({
  items, 
  render
}: {
  items: ListItem[], 
  render: (item: ListItem) => React.ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

export default List