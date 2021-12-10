// import Item from './Item';
// const ItemList = () => (
//   <>

//   </>
// )

// const TodoList = ({props here}) => {
const ItemList = ({ items, listName}) => {
  return (
    <>
      <h1>{listName} List</h1>
      <ul>
        {/* {
          items.map( item =>
        
            <Item {...item} />
          )
        } */}
      </ul>
    </>
  )
}


export default ItemList;