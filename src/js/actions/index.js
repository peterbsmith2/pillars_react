import * as types from '../constants/ActionTypes'
let nextPillarItemId = 0;
export const addPillarItem = (submission) => {
  return {
    type: types.ADD_PILLAR_ITEM
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
    type: types.REMOVE_PILLAR_ITEM
    id
  }
}
