import * as types from '../constants/ActionTypes'
import * as api from '../api'
import { getIsFetching } from '../reducers'
import { normalize } from 'normalizr'
import * as schema from './schema'

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
        response: normalize(response, schema.arrayOfEntries)
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

export const addEntry = (submission) => (dispatch) => {

  dispatch({
    type: types.ADD_ENTRY_REQUEST,
    day: submission.day
  })

  return api.addEntry(submission).then(response => {
    dispatch({
      type: types.ADD_ENTRY_SUCCESS,
      response: normalize(response, schema.entry),
      day: submission.day
    })
  })
}


export const removeEntry = (submission) => (dispatch) => {
  console.log(submission)
  dispatch({
    type: types.REMOVE_ENTRY_REQUEST,
    day: submission.params.day
  })
  api.removeEntry(submission).then(response => {
    // NOTE: May need to modify the dispatch, depending on what the response
    // is defined as
    dispatch({
      type: types.REMOVE_ENTRY_SUCCESS,
      response: normalize(response, schema.entry),
      day: submission.params.day
    })
  })
}
