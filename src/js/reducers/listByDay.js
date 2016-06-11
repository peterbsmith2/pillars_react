import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'
import moment from 'moment'

const ids = (state = [], action) => {
  switch(action.type) {
    case types.FETCH_ENTRIES_SUCCESS:
      return action.response.map(entry => entry.id)
    default:
      return state
  }
  // switch(action.type) {
  //   case types.FETCH_ENTRIES_SUCCESS:
  //     return {
  //       ...state,
  //       ids: action.response.map(entry => entry.id)
  //   }
  //   default:
  //     return state
  // }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.FETCH_ENTRIES_REQUEST:
      return true
    case types.FETCH_ENTRIES_SUCCESS:
    case types.FETCH_ENTRIES_FAILURE:
      return false
    default:
      state
  }
  // switch(action.type) {
  //   case types.FETCH_ENTRIES_REQUEST:
  //     return {
  //       ...state,
  //       isFetching: true
  //     }
  //   case types.FETCH_ENTRIES_SUCCESS:
  //   case types.FETCH_ENTRIES_FAILURE:
  //     return {
  //       ...state,
  //       isFetching: false
  //     }
  //   default:
  //     return state
  // }
}

const errorMessage = (state = null, action) => {
  switch(action.type) {
    case types.FETCH_ENTRIES_REQUEST:
    case types.FETCH_ENTRIES_SUCCESS:
      return null
    case types.FETCH_ENTRIES_FAILURE:
      return action.message
  }
  // switch(action.type) {
  //   case types.FETCH_ENTRIES_REQUEST:
  //   case types.FETCH_ENTRIES_SUCCESS:
  //     return {
  //       ...state,
  //       errorMessage: null
  //     }
  //   case types.FETCH_ENTRIES_FAILURE:
  //     return {
  //       ...state,
  //       errorMessage: action.message
  //     }
  //   default:
  //     return state
  // }
}


// const daysList = combineReducers({
//   ids,
//   isFetching,
//   errorMessage
// })

const listByDay = (state = {} , action) => {
  // note: initial call...
  let updatedState = {
    ...state
  }
  if (!action.day) {
    return state
  }
  if (!state[action.day]) {
    updatedState = {
      ...state,
      [action.day]: {}
    }
  }
  return {
    ...updatedState,
    // [action.day]: daysList(updatedState[action.day], action)
    [action.day]: {
      ids: ids(updatedState[action.day].ids, action),
      isFetching: isFetching(updatedState[action.day].isFetching, action),
      errorMessage: errorMessage(updatedState[action.day].errorMessage, action)
    }
  }
}

export default listByDay

export const getIds = (state, day) =>
    !state[day] ? [] : state[day].ids

export const getIsFetching = (state, day) =>
    !state[day] ? false : state[day].isFetching

export const getErrorMessage = (state, day) =>
    !state[day] ? false : state[day].errorMessage


// Todo: Breakout into ids, isFecthing, and getErrors reducers
// const listByDay = (state = {}, action) => {
//   switch (action.type) {
//     case types.FETCH_ENTRIES_REQUEST:
//       switch (state[action.day]) {
//         case undefined:
//           return {
//             ...state,
//             [action.day]: {
//               ids: [],
//               isFetching: true,
//               errorMessage: false
//             }
//           }
//         default:
//           return {
//             ...state,
//             [action.day]: {
//               ids: state[action.day].ids,
//               isFetching: true,
//               errorMessage: state[action.day].errorMessage
//             }
//           }
//       }
//     case types.FETCH_ENTRIES_SUCCESS:
//       if (!action.response[0]) {
//         return {
//           ...state,
//           [action.day]: {
//             ids: [],
//             isFetching: false,
//             errorMessage: false
//           }
//         }
//       }
//       return {
//         ...state,
//         [action.day]: {
//           ids: action.response.map(entry => entry.id),
//           isFetching: false,
//           errorMessage: false
//         }
//       }
//     case types.FETCH_ENTRIES_FAILURE:
//       // TODO: ACTUAL IMPLEMENTATION
//       return state
//     case types.ADD_ENTRY_REQUEST:
//       // INTENTIONALLY USELESS
//       return state
//     case types.ADD_ENTRY_SUCCESS:
//       const day = moment(action.response.start).format("YYYY-MM-DD")
//       return Object.assign({}, state, {
//         [day]: {
//             ids: state[day].ids.concat(action.response.id),
//             isFetching: false,
//             errorMessage: false
//           }
//         })
//     case types.ADD_ENTRY_FAILURE:
//       // TODO: ACTUAL IMPLEMENTATION
//       return state
//     default:
//       return state
//   }
// }

// const ids = (state = [], action) => {
//   switch(action.type) {
//     case types.FETCH_ENTRIES_SUCCESS:
//       if (!state[action.day]) {
//         return {
//           ...state,
//           [action.day]: []
//         }
//       }
//       return {
//         ...state,
//         [action.day]: {
//           ...state[action.day],
//           ids: action.response.map(entry => entry.id)
//         }
//       }
//     case types.ADD_ENTRY_SUCCESS:
//       // TODO
//       return state
//     default:
//       return state
//
//   }
//
// }
//
// const isFetching = (state = false, action) => {
//   switch(action.type) {
//     case types.FETCH_ENTRIES_REQUEST:
//       return {
//         ...state,
//         [action.day]: {
//           ...state[action.day],
//           isFetching: true
//         }
//       }
//     case types.FETCH_ENTRIES_SUCCESS:
//     case types.FETCH_ENTRIES_FAILURE:
//       return {
//         ...state,
//         [action.day]: {
//           ...state[action.day],
//           isFetching: false
//         }
//       }
//     default:
//       return state
//   }
// }
//
// const errorMessage = (state = null, action) => {
//   switch(action.type) {
//     case types.FETCH_ENTRIES_REQUEST:
//     case types.FETCH_ENTRIES_FAILURE:
//       return {
//         ...state,
//         [action.day]: {
//           ...state[action.day],
//           errorMessage: null
//         }
//       }
//     case types.FETCH_ENTRIES_FAILURE:
//       return {
//         ...state,
//         [action.day]: {
//           ...state[action.day],
//           errorMessage: action.message
//         }
//       }
//     default:
//       return state
//   }
// }
