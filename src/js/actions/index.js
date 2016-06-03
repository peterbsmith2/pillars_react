let nextPillarItemId = 0;
export const addPillarItem = (notes) => {
  return {
    type: 'ADD_PILLAR_ITEM',
    id: nextPillarItemId++,
    pillar: 'ZAZEN',
    start: Date.now(),
    duration: '00:30:00',
    quality: 'YAY',
    notes
  }
}
