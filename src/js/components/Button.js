import React, { PropTypes } from 'react'

const Button = ({
  id,
  onClick
}) => (
  <a href="#"
    onClick={e => {
      e.preventDefault()
      onClick()
    }}
  >
    {id}
  </a>
)

Button.propTypes = {
//  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
