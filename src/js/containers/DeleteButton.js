import { connect } from 'react-redux'
import { removeEntry } from '../actions'
import Button from '../components/Button'
import { withRouter } from 'react-router'
import moment from 'moment'

const mapStateToProps = (state, { params }) => {
  const day = params.day || moment().format("YYYY-MM-DD")
  return {
    day
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(removeEntry(ownProps))
    }
  }
}

const DeleteButton = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Button))

export default DeleteButton
