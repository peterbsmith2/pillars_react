// THIS IS ALL IRRELEVANT UNTIL ENTRIES ARE BEING FETCHED FROM SERVER
//
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../../src/js/actions/'
// import * as types from '../../src/js/constants/ActionTypes'
// import expect from 'expect'
//
// const middlewares = [ thunk ]
// const mockStore = configureMockStore(middlewares)
//
// describe('async actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })
//
//   it('creates FETCH_ENTRIES_SUCCESS when fetching todos has been done', () => {
//
//     const mockInitialState =
//     {
//       byId: {},
//       listByDay: {
//         "2016-06-06": {}
//       }
//     }
//
//     const mockFetchState = {
//       "byId": {
//         123: {
//           "id": 123,
//           "pillar": "ZAZEN",
//           "start": 1465264800000
//         },
//       },
//       "listByDay": {
//         "2016-06-06": {
//           "ids": [123],
//           "isFetching": false,
//           "errorMessage": false
//         },
//       }
//     }
//
//     const mockResponse =
//     {
//       entities: {
//         entries: {
//           123: {
//             id: 123
//             pillar: "ZAZEN"
//             start: 1465264800000
//           }
//         }
//       },
//       result: [123]
//     }
//
//     nock('http://example.com/')
//       .get('/todos')
//       .reply(200, { body: { todos: ['do something'] }})
//
//     const expectedActions = [
//       { type: types.FETCH_ENTRIES_REQUEST },
//       { type: types.FETCH_ENTRIES_SUCCESS, : { odos: ['do something']  } }
//     ]
//     const store = mockStore(mockInitialState)
//
//     return store.dispatch(actions.fetchEntries())
//       .then(() => { // return of async actions
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//   })
// })
