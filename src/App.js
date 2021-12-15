import { Component } from 'react';
import Item from './components/items/Item';
import ItemList from './components/items/ItemList';
import ItemForm from './components/items/ItemForm';

class App extends Component {
  state = { items: [
    { id: 1, title: 'Steak', price: integer, complete: true, },
    { id: 2, title: 'Bread', price: integer, complete: true, },
    { id: 3, title: 'Apples', price: integer, complete: false,  },
  ] }

  // all of crud action functions will be in a HOC
  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (incomingItem) => {
    const { items } = this.state 
    // include id because not connected to db
    // const newTodo = { id: this.getUniqId(), title: incomingItem.title, desc: incomingItem.desc, complete: incomingItem.complete  }
    const newItem = { id: this.getUniqId(), ...incomingItem  }
     this.setState({ items: [...items, newItem ]})
  }


      
    
    
  
  render() {
    const { items } = this.state
    return (
      <>
        <h1>Groceries</h1>
        <ItemForm addItem={this.addItem} />
        <ItemList items={items} listName="Grocery" />
    
      </>
    )
  }
}

export default App;