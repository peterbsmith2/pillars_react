import React, { PropTypes } from 'react'

const Button = ({
  onClick
}) => (
  <a href="#"
    onClick={e => {
      e.preventDefault()
      onClick()
    }}
  >
    delete
  </a>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
