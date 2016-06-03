import React, { PropTypes } from 'react'

const PillarItem = ({
  pillar,
  start,
  duration,
  quality,
  notes
}) => (
  <tr>
    <td>
      Edit
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
  pillar: PropTypes.string.isRequired,
  start: PropTypes.object.isRequired,
  duration: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired
}

export default PillarItem
