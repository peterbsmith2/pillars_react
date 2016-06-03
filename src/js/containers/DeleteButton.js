import { connect } from 'react-redux'
import { removePillarItem } from '../actions'
import Button from '../components/Button'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(removePillarItem(ownProps.id))
    }
  }
}

const DeleteButton = connect(
  null,
  mapDispatchToProps
)(Button)

export default DeleteButton
