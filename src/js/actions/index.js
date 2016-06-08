import * as types from '../constants/ActionTypes'
import * as api from '../api'
import { getIsFetching } from '../reducers'

export const fetchEntries = (day) => (dispatch, getState) => {
  if(getIsFetching(getState(), day)) {
    return Promise.resolve()
  }

  dispatch({
    type: types.FETCH_ENTRIES_REQUEST,
    day
  })

  return api.fetchEntries(day).then(
    response => {
      dispatch({
        type: types.FETCH_ENTRIES_SUCCESS,
        day,
        response
      })
    },
    error => {
      dispatch({
        type: types.FETCH_ENTRIES_FAILURE,
        day,
        message: error.message || 'Something failed to work properly.'
      })
    })
}

export const addEntry = (submission) => (dispatch) =>
  api.addEntry(submission).then(response => {
    dispatch({
      type: types.ADD_PILLAR_ITEM_SUCCESS,
      response
    })
  })


export const removeEntry = (id) => (dispatch) =>
  api.removeEntry(submission).then(response => {
    // NOTE: May need to modify the dispatch, depending on what the response
    // is defined as
    dispatch({
      type: types.REMOVE_PILLAR_ITEM_SUCCESS,
      response
    })
  })
