import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actions from '../actions'
import PillarsTable from '../components/PillarsTable'
import { getDaysEntries, getIsFetching, getErrorMessage } from '../reducers'
import moment from 'moment'

class DaysPillarsTable extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.day !== prevProps.day) {
      this.fetchData()
    }
  }

  fetchData() {
    const { day, fetchEntries } = this.props
    fetchEntries(day)
  }

  render() {
    const { errorMessage, entries, isFetching } = this.props

    if (isFetching && !entries.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !entries.length) {
      return (
        // TODO: ACTUAL ERROR HANDLING
        <div></div>
      )
    }
    const formattedEntries = entries.map(entry => {
      return {
        ...entry,
        start: moment(entry.start).format("hh:mm a")
      }
    })
    return (
      <PillarsTable
        entries={formattedEntries}
      />
    )
  }
}

const mapStateToProps = (state, { params }) => {
  const day = params.day || moment().format("YYYY-MM-DD")

  return {
    entries: getDaysEntries(state, day),
    errorMessage: getErrorMessage(state, day),
    isFetching: getIsFetching(state, day),
    day
  }
}

DaysPillarsTable = withRouter(connect(
  mapStateToProps,
  actions
)(DaysPillarsTable))

export default DaysPillarsTable
