import { connect } from 'react-redux'
//import { removePillarItem } from '../actions'
import PillarsTable from '../components/PillarsTable'

const mapStateToProps = (state) => {
  return {
    pillarsItems: state.pillarsItems
  }
}
/*
const mapDispatchToProps = (dispatch) => ({
  onDeleteClick(id) {
    dispatch(removePillarItem(id))
  }
})
*/
const VisiblePillarsTable = connect(
  mapStateToProps,
  null
//  mapDispatchToProps
)(PillarsTable)

export default VisiblePillarsTable
