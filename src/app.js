import { createStore, combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

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
};

const pillarsApp = combineReducers({
  pillarsItems
})

const PillarItem = ({
  pillar,
  start,
  duration,
  quality,
  notes
}) => (
  <tr>
    <td>
      Edit
    </td>
    <td>
      {pillar}
    </td>
    <td>
      {start}
    </td>
    <td>
      {duration}
    </td>
    <td>
      {quality}
    </td>
    <td>
      {notes}
    </td>
  </tr>
)

const PillarsTable = ({
  pillarsItems
}) => (
  <table>
    <thead>
      <tr>
        <th>Edit</th>
        <th>Pillar</th>
        <th>Start</th>
        <th>Duration</th>
        <th>Quality</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {pillarsItems.map(pillarItem =>
        <PillarItem
          key={pillarItem.id}
          {...pillarItem}
        />
      )}
    </tbody>
  </table>
)

const store = createStore(pillarsApp);
let nextPillarItemId = 0;
class PillarsApp extends React.Component {
  render() {
    const { pillarsItems }  = this.props;
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_PILLAR_ITEM',
            id: nextPillarItemId++,
            pillar: 'ZAZEN',
            start: Date.now(),
            duration: '00:30:00',
            quality: 'YAY',
            notes: this.input.value
          });
          this.input.value = '';
        }}>
          Add Pillar
        </button>
        <PillarsTable
          pillarsItems = {pillarsItems}
        />
      </div>
    )
  }

}

const render = () => {
  ReactDOM.render(
    <PillarsApp
      {...store.getState()}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();
