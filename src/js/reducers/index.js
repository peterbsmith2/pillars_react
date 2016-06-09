import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import listByDay, * as fromListByDay from './listByDay'

const rootReducer = combineReducers({
  byId,
  listByDay
})

export default rootReducer

export const getDaysEntries = (state, day) => {
  const ids = fromListByDay.getIds(state.listByDay, day)
  return ids.map(id => fromById.getEntries(state.byId, id))
}

export const getIsFetching = (state, day) => {
  return fromListByDay.getIsFetching(state.listByDay, day)
}

export const getErrorMessage = (state, day) => {
  return fromListByDay.getErrorMessage(state.listByDay, day)
}
