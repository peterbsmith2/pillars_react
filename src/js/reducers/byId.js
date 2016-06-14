import * as types from '../constants/ActionTypes'
const byId = (state= {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.entries
    }
  }
  return state
}

export default byId

export const getEntries = (state, id) => state[id]
