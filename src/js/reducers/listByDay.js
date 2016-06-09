import * as types from '../constants/ActionTypes'

const listByDay = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ENTRIES_REQUEST:
      switch (state[action.day]) {
        case undefined:
          return {
            ...state,
            [action.day]: {
              ids: [],
              isFetching: true,
              errorMessage: false
            }
          }
        default:
          return {
            ...state,
            [action.day]: {
              ids: state[action.day].ids,
              isFetching: true,
              errorMessage: state[action.day].errorMessage
            }
          }
      }
    case types.FETCH_ENTRIES_SUCCESS:
      if (!action.response[0]) {
        return {
          ...state,
          [action.day]: {
            ids: [],
            isFetching: false,
            errorMessage: false
          }
        }
      }
      return {
        ...state,
        [action.day]: {
          ids: action.response.map(entry => entry.id),
          isFetching: false,
          errorMessage: false
        }
      }
    case types.FETCH_ENTRIES_FAILURE:
      //TODO ACTUAL IMPLEMENTATION
      return state
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
export const getIds = (state, day) =>
    !state[day] ? [] : state[day].ids

export const getIsFetching = (state, day) =>
    !state[day] ? false : state[day].isFetching

export const getErrorMessage = (state, day) =>
    !state[day] ? false : state[day].errorMessage
