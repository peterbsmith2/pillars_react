import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'
import moment from 'moment'

const listOfDays =  {}

const createRootReducer = (day) => {
  listOfDays[day] = createList(day)

  const listByDay = combineReducers({
    ...listOfDays
  })

  return combineReducers({
    byId,
    listByDay
  })
}

export default createRootReducer
export const getDaysEntries = (state, day) => {
  const ids = fromList.getIds(state.listByDay[day])
  // TODO: the language below could be a little clearer
  return ids.map(id => fromById.getEntries(state.byId, id))
}

export const getIsFetching = (state, day) =>
  fromList.getIsFetching(state.listByDay[day])

export const getErrorMessage = (state, day) =>
  fromList.getErrorMessage(state.listByDay[day])

// const pillarItem = (state, action) => {
//   switch(action.type) {
//     case 'ADD_PILLAR_ITEM':
//       return {
//         id: action.id,
//         pillar: action.pillar,
//         start: action.start,
//         duration: action.duration,
//         quality: action.quality,
//         notes: action.notes
//       };
//     default:
//       return state;
//   }
// }
//
// const pillarsItems = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_PILLAR_ITEM':
//       return [
//         ...state,
//         pillarItem(undefined, action)
//       ];
//     case 'REMOVE_PILLAR_ITEM':
//       return state.filter(todo =>
//         todo.id !== action.id
//       )
//     default:
//       return state;
//   }
// }

