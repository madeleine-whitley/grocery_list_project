import { Component } from 'react';
import ItemList from './components/items/ItemList';

class App extends Component {
  state = { item: [
    { id: 1, title: 'Learn Ruby',  desc: 'learn ruby langauge', complete: true, },
    { id: 2, title: 'Learn JS',  desc: 'learn js langauge', complete: true, },
    { id: 3, title: 'Learn React',  desc: 'learn React technology', complete: false, },
  ] }

  render() {
    const { item } = this.state
    return (
      <>
        <h1>Grocery List</h1>
        <ItemList item={item} listName="Coding" />
      </>
    )
  }
}

export default App;