import * as types from '../constants/ActionTypes'
import moment from 'moment'

const byId = (state= {}, action) => {
  switch (action.type) {
    case types.ADD_ENTRY_SUCCESS:
    case types.FETCH_ENTRIES_SUCCESS:
      for (let prop in action.response.entities.entries) {
        // TODO: This has to do with the API responding with a datestring and
        // not an epoch, fix the API
        action.response.entities.entries[prop].start =
          moment(action.response.entities.entries[prop].event_date).valueOf();
        delete action.response.entities.entries[prop].event_date
      }
      return {
        ...state,
        ...action.response.entities.entries
      }
    case types.REMOVE_ENTRY_SUCCESS:
      let nextState = { ...state }
      delete nextState[action.response.result]
      return nextState
    default:
      return state
  }
}

export default byId

export const getEntries = (state, id) => state[id]
