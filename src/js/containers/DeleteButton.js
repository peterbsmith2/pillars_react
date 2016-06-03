import { connect } from 'react-redux'
import { removePillarItem } from '../actions'
import Button from '../components/Button'

/*const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log(ownProps)
  return
}*/

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
