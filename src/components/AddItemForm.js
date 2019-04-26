import React, { Component } from 'react'

class AddItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      items: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleClick (event) {
    const { items, value } = this.state;
    this.setState({value : '', items: [value, ...items]})
  }

  deleteItem (itemToDelete) {
    const { items } = this.state;
    this.setState({items: items.filter(item => item !== itemToDelete)})
  }

  render () {
    const { items, value } = this.state;
    return (
      <div>
        <label>
          <input type="text" value={value} onChange={this.handleChange} className='addToDoInput' />
        </label>
        <input
          type='button'
          value='Add To Do'
          onClick={this.handleClick}
          className='addToDoButton'
        />
        {items.map(item => <p key={item} onClick={() => this.deleteItem(item)}>{item}</p>)}
      </div>
    )
  }
}

export default AddItemForm;