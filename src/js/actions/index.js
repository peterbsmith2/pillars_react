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

export const addPillarItem = (submission) => {
  return {
    type: types.ADD_PILLAR_ITEM,
    id: nextPillarItemId++,
    pillar: submission.pillar,
    start: Date.now(),
    duration: submission.duration,
    quality: submission.quality,
    notes: submission.notes
  }
}

export const removePillarItem = (id) => {
  return {
    type: types.REMOVE_PILLAR_ITEM,
    id
  }
}
