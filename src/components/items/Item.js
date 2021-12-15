import { Component } from 'react';

class Item extends Component {
  render() {
    const { id, title, price, complete } = this.props
    return (
      <>
      <li style={complete ? { ...styles.completed} : null }>
      
        <h1>{title}</h1>
        <h5>${price}</h5>
      </li>
      </>
    )
  }
}

const styles = {
  completed: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Item;