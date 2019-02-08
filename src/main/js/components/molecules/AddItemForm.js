import React from 'react'

export class AddItemForm extends React.Component {
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
    this.setState({value : '', items: [this.state.value, ...this.state.items]})
    event.preventDefault()
  }

  deleteItem (itemToDelete) {
    this.setState({items: this.state.items.filter(item => item !== itemToDelete)})
  }

  render () {
    return (
      <div>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input
          type='button'
          value='Add To Do'
          onClick={this.handleClick}
        />
        {this.state.items.map(item => <p key={item} onClick={() => this.deleteItem(item)}>{item}</p>)}
      </div>
    )
  }

}