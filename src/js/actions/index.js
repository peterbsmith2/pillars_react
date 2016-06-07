import * as types from '../constants/ActionTypes'
import * as api from '../api'
let nextPillarItemId = 0;

export const requestEntries = (day) => ({
  type: 'REQUEST_ITEMS',
  day
})

const receiveEntries = (day, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchEntries = (day) =>
  api.fetchEntries(day).then(response =>
    fetchEntries(day, response)
  )

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
