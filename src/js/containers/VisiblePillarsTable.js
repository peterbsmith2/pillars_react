import { connect } from 'react-redux'
import PillarsTable from '../components/PillarsTable'

const mapStateToProps = (state) => {
  return {
    pillarsItems: state.pillarsItems
  }
}

const VisiblePillarsTable = connect(
  mapStateToProps,
  null
)(PillarsTable)

export default VisiblePillarsTable
