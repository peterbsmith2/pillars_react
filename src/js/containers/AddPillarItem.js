import React from 'react'
import { connect } from 'react-redux'
import { addPillarItem } from '../actions'

let AddPillarItem = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPillarItem(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node;
        }} />
        <button type="submit">
          Add Pillar
        </button>
      </form>
    </div>
  )
}
AddPillarItem = connect()(AddPillarItem)

export default AddPillarItem
