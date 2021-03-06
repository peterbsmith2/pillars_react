import React, { PropTypes } from 'react'
import DeleteButton from '../containers/DeleteButton'

const PillarItem = ({
  id,
  pillar,
  start,
  duration,
  quality,
  notes,
  day
}) => (
  <tr>
    <td>
      <DeleteButton
        id={id}
        day={day}
      />
    </td>
    <td>
      {pillar}
    </td>
    <td>
      {start}
    </td>
    <td>
      {duration}
    </td>
    <td>
      {quality}
    </td>
    <td>
      {notes}
    </td>
  </tr>
)

PillarItem.propTypes = {
  id: PropTypes.string.isRequired,
  pillar: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
}

export default PillarItem
