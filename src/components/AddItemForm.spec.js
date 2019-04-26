/*global test*/

import React from 'react'
import AddItemForm from './AddItemForm.js'
import jesttestsetup from '../../test/jestsetup.js'

describe('AddItemForm', () => {

  const wrapper = shallow(<AddItemForm/>)
  const textBox = wrapper.find('.addToDoInput')
  const button = wrapper.find('.addToDoButton')

  it('renders', () => {
    expect(wrapper.length).toBe(1)
  })

  it('renders the text box', () => {
    expect(textBox.length).toBe(1)
  })

  it('renders the button', () => {
    expect(button.length).toBe(1)
  })

  it('adds the to do item when button is pressed', () => {
    const toDo = 'a to do item'

    textBox.simulate('change', { target: { value: toDo } })

    button.simulate('click')

    expect(wrapper.find('p').text()).toBe(toDo)
  })

  it('removes the to do item when the item is clicked', () => {
    let p = wrapper.find('p')

    p.simulate('click')

    p = wrapper.find('p')

    expect(p.length).toBe(0)
  })

});
