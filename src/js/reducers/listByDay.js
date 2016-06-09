import * as types from '../constants/ActionTypes'

const listByDay = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ENTRY_SUCCESS:
      switch (state[action.submission.start]) {
        case undefined:
          return Object.assign({}, state, {
              [action.submission.start]: {
                ids: [action.submission.id],
                isFetching: false,
                errorMessage: false
              }
          })
        default:
          return Object.assign({}, state, {
            [action.start]: {
              ids: state[action.start].ids.concat(action.submission.id),
              isFetching: false,
              errorMessage: false
            }
          })
      }
    default:
      return state
  }
}

export default listByDay

