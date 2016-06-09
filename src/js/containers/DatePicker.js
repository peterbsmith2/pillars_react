import React from 'react'
import { connect } from 'react-redux'
import { withRouter, hashHistory } from 'react-router'
import * as actions from '../actions'
import moment from 'moment'

let DatePicker = ({ day  }) => {
  let date
  const defaultDay = day || moment().format("YYYY-MM-DD")

  return (
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div id="date-form" className="form form-inline centered">
          <label for="datePicker">
            Date
            <input
              type="date"
              className="form-control"
              defaultValue={defaultDay}
              ref= {node => {
                date = node
              }}
              onChange={e => {
                hashHistory.push(date.value)
              }}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

DatePicker = withRouter(connect()(DatePicker))

export default DatePicker
