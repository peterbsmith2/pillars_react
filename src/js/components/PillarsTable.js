import React, { PropTypes } from 'react'
import PillarItem from './PillarItem'

const PillarsTable = ({
  pillarsItems,
}) => (
  <table>
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
      {pillarsItems.map(pillarItem =>
        <PillarItem
          key={pillarItem.id}
          {...pillarItem}
        />
      )}
    </tbody>
  </table>
)

PillarsTable.propTypes = {
  pillarsItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    pillar: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    quality: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PillarsTable
