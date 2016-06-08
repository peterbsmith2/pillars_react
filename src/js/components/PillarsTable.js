import React, { PropTypes } from 'react'
import PillarItem from './PillarItem'

const PillarsTable = ({
  entries
}) => (
  <div className="col-md-10 col-md-offset-1">
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Edit</th>
            <th>Pillar</th>
            <th>Start</th>
            <th>Duration</th>
            <th>Quality</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry =>
            <PillarItem
              key={entry.id}
              {...entry}
            />
          )}
        </tbody>
      </table>
    </div>
  </div>
)


export default PillarsTable
