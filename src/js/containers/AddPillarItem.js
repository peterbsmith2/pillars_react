import React from 'react'
import { connect } from 'react-redux'
import { addPillarItem } from '../actions'

let AddPillarItem = ({ dispatch }) => {
  let submission = {
    pillar: '',
    duration: '',
    notes: '',
    quality: ''
  }

  return (
    <div>
      <form onSubmit={e => {
        let preparedSubmission
        e.preventDefault()
        if (!submission.quality.checked) {
          submission.quality.value = "WRENCH"
        }
        preparedSubmission = {
          pillar: submission.pillar.value,
          duration: submission.duration.value,
          notes: submission.notes.value,
          quality: submission.quality.value
        }
        dispatch(addPillarItem(preparedSubmission))
        submission.notes.value = ''
        submission.duration.value = ''
        submission.quality.checked = false
      }}>
        <select ref={node => {
          submission.pillar = node
        }}>
          <option value="ZAZEN">ZAZEN</option>
          <option value="WORK">WORK</option>
          <option value="SOCIAL">SOCIAL</option>
          <option value="LEARN">LEARN</option>
          <option value="BIKE">BIKE</option>
          <option value="EAT WELL">EAT WELL</option>
          <option value="SLACK">SLACK</option>
        </select>
        <input ref={node => {
          submission.duration = node;
        }} />
        <input ref={node => {
          submission.notes = node;
        }} />
        <input name="quality" type="radio" value="YAY" ref={node => {
          submission.quality = node;
        }}/>
        <input name="quality" type="radio" value="WRENCH" />
        <button type="submit">
          Add Pillar
        </button>
      </form>
    </div>
  )
}
AddPillarItem = connect()(AddPillarItem)

export default AddPillarItem
