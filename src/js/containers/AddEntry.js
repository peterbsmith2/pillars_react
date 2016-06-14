import React from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../actions'
import { withRouter } from 'react-router'
import moment from 'moment'

let AddEntry = ({ params, dispatch }) => {
  let submission = {
    pillar: '',
    duration: '',
    notes: '',
    quality: '',
    start: ''
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
          quality: submission.quality.value,
          start: +moment(params.day + " " + submission.start.value, "YYYY-MM-DD HH:mm"),
          day: params.day
        }
        dispatch(addEntry(preparedSubmission))
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
        <input
          ref={node => {
            submission.duration = node;
          }}
        />
        <input
          ref={node => {
            submission.notes = node;
          }}
        />
        <input
          ref={node => {
            submission.start = node;
          }}
          type="time"
        />
        <input
          name="quality"
          type="radio"
          value="YAY"
          ref={node => {
            submission.quality = node;
          }}
        />
        <input
          name="quality"
          type="radio"
          value="WRENCH"
        />
        <button
          type="submit"
        >
          Add Pillar
        </button>
      </form>
    </div>
  )
}

AddEntry = withRouter(connect()(AddEntry))

export default AddEntry
