import React from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../actions'
import { withRouter } from 'react-router'
import moment from 'moment'

let AddEntry = ({ params, dispatch }) => {
  let submission = {
    user_pillar: '',
    user_duration: '',
    user_notes: '',
    user_quality: '',
    user_date: ''
  }

  return (
    <div>
      <form onSubmit={e => {
        let preparedSubmission
        e.preventDefault()
        if (!submission.user_quality.checked) {
          submission.user_quality.value = "WRENCH"
        }
        preparedSubmission = {
          user_pillar: submission.user_pillar.value,
          user_duration: submission.user_duration.value,
          user_notes: submission.user_notes.value,
          user_quality: submission.user_quality.value,
          user_date: params.day + "T" + submission.user_date.value + ":00",
          day: params.day
        }
        dispatch(addEntry(preparedSubmission))
        submission.user_notes.value = ''
        submission.user_duration.value = ''
        submission.user_quality.checked = false
      }}>
        <select ref={node => {
          submission.user_pillar = node
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
            submission.user_duration = node;
          }}
        />
        <input
          ref={node => {
            submission.user_notes = node;
          }}
        />
        <input
          ref={node => {
            submission.user_date = node;
          }}
          type="time"
        />
        <input
          name="quality"
          type="radio"
          value="YAY"
          ref={node => {
            submission.user_quality = node;
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
