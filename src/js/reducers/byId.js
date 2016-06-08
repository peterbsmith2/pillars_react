import * as types from '../constants/ActionTypes'
const byId = (state= {}, action) => {
  switch (action.type) {
    case types.FETCH_ENTRIES_SUCCESS:
      const nextState = { ...state }
      action.response.forEach(entry => {
        nextState[entry.id] = entry
      })
      return nextState
    case types.ADD_ENTRY_SUCCESS:
      return {
        ...state,
        [action.response.id]: action.response
      }
    default:
      return state
  }
}

export default byId

export const getTodo = (state, id) => state[id]
