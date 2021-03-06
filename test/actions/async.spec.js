import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/js/actions/'
import * as types from '../../src/js/constants/ActionTypes'
import expect from 'expect'
import nock from 'nock'
import * as api from '../../src/js/api'

const middlewares = [ thunk.withExtraArgument(api) ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_ENTRIES_SUCCESS when fetching entries has been done', () => {

    const mockInitialState = {
      ids: {},
      listByDay: {}
    };

    const responseFromServer =
    {
      "Error": false,
      "Message": "Success",
      "entries": [{
        "id": 4541,
        "pillar": "SOCIAL",
        "event_date": "2016-06-30 08:00:00",
        "duration": "01:00:00",
        "quality": "YAY",
        "notes": "Phone Call with Sam",
        "entry_utc_timestamp": "2016-06-30 13:49:09"
      }]
    };

    const normalizedResponse =
    {
      entities: {
        entries: {
          4541: {
            duration: "01:00:00",
            entry_utc_timestamp: "2016-06-30 13:49:09",
            notes: "Phone Call with Sam",
            id: 4541,
            pillar: "SOCIAL",
            quality: 'YAY',
            event_date: "2016-06-30 08:00:00"
          }
        }
      },
      result: [4541]
    };

    nock('http://pillars.peterbsmith.net')
      .get('/api/log/2016-06-30/2016-06-30T23:59:59')
      .reply(200, responseFromServer );

    const expectedActions = [
      { type: types.FETCH_ENTRIES_REQUEST, day: '2016-06-30' },
      { type: types.FETCH_ENTRIES_SUCCESS, day: '2016-06-30', response: normalizedResponse }
    ];

    const store = mockStore(mockInitialState);

    return store.dispatch(actions.fetchEntries('2016-06-30'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates ADD_ENTRY_SUCCESS when adding entry has been done', () => {

    const mockInitialState = {};

    const responseFromServer =
    {
      "Error": false,
      "Message": "Success",
      "entries": {
        "id": 4541,
        "pillar": "SOCIAL",
        "event_date": "2016-06-30 08:00:00",
        "duration": "01:00:00",
        "quality": "YAY",
        "notes": "Phone Call with Sam",
        "entry_utc_timestamp": "2016-06-30 13:49:09"
      }
    };

    const normalizedResponse =
    {
      entities: {
        entries: {
          4541: {
            duration: "01:00:00",
            entry_utc_timestamp: "2016-06-30 13:49:09",
            notes: "Phone Call with Sam",
            id: 4541,
            pillar: "SOCIAL",
            quality: 'YAY',
            event_date: "2016-06-30 08:00:00"
          }
        }
      },
      result: 4541
    };

    const submission = {
      day: '2016-06-30'
      // actual form input omitted
    }

    nock('http://pillars.peterbsmith.net')
      .post('/api/log/')
      .reply(200, responseFromServer );

    const expectedActions = [
      { type: types.ADD_ENTRY_REQUEST, day: '2016-06-30' },
      { type: types.ADD_ENTRY_SUCCESS, day: '2016-06-30', response: normalizedResponse }
    ]
    const store = mockStore(mockInitialState);

    return store.dispatch(actions.addEntry(submission))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates REMOVE_ENTRY_SUCCESS when removing entry has been done', () => {

    const mockInitialState = {};

    const normalizedResponse =
    {
      entities: {
        entries: {
          4541: {
            duration: "01:00:00",
            entry_utc_timestamp: "2016-06-30 13:49:09",
            notes: "Phone Call with Sam",
            id: 4541,
            pillar: "SOCIAL",
            quality: 'YAY',
            event_date: "2016-06-30 08:00:00"
          }
        }
      },
      result: 4541
    };

    const submission = {
      day: '2016-06-30',
      id: 4601
    };

    nock('http://pillars.peterbsmith.net')
      .delete('/api/log/')
      .reply(200);

    const expectedActions = [
      { type: types.REMOVE_ENTRY_REQUEST, day: '2016-06-30', id: 4601 },
      { type: types.REMOVE_ENTRY_SUCCESS, day: '2016-06-30', response: { result: 4601 } }
    ];

    const store = mockStore(mockInitialState);

    return store.dispatch(actions.removeEntry(submission))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
