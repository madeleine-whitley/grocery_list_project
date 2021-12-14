 import Item from './Item';
// const ItemList = () => (
//   <>

//   </>
// )

// const TodoList = ({props here}) => {
const ItemList = ({ items, listName  }) => {
  return (
    <>
      <h1>{listName} List</h1>
      <ul>
         {
          items.map( item => 
            // <li>{item.title}</li>
             <Item {...item} />
            // <Item id={item.id} title={item.title} desc={item.title} complete={item.complete}  />
          )
         } 
      </ul>
    </>
  )
}


export default ItemList;