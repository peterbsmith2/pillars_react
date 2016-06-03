const pillarItem = (state, action) => {
  switch(action.type) {
    case 'ADD_PILLAR_ITEM':
      return {
        id: action.id,
        pillar: action.pillar,
        start: action.start,
        duration: action.duration,
        quality: action.quality,
        notes: action.notes
      };
    default:
      return state;
  }
}

const pillarsItems = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PILLAR_ITEM':
      return [
        ...state,
        pillarItem(undefined, action)
      ];
    default:
      return state;
  }
}

export default pillarsItems
