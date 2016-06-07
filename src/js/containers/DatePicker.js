import React from 'react'

// needs the dispatch to send out the ''
const Controls = ({ dispatch }) => {
  return (
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div id="date-form" className="form form-inline centered">
          <label for="datePicker">
            Date
            <input type="date" className="form-control" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Controls
