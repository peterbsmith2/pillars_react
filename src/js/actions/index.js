let nextPillarItemId = 0;
export const addPillarItem = (submission) => {
  return {
    type: 'ADD_PILLAR_ITEM',
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
    type: 'REMOVE_PILLAR_ITEM',
    id
  }
}
