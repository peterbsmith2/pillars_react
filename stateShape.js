var mockInitialState =

{
  byId: {},
  listByDay: {
    "2016-06-18": {}
  }
}

var mockState =

{
  "byId": {
    123: {
      "id": 123,
      "pillar": "ZAZEN",
      "start": 1465264800000
    },
    456: {
      "id": 456,
      "pillar": "ZAZEN",
      "start": 1465401600000
    }
  },
  "listByDay": {
    "2016-06-06": {
      "ids": [123],
      "isFetching": false,
      "errorMessage": false
    },
    "2016-06-08": {
      "ids": [456],
      "isFetching": false,
      "errorMessage": false
    }
  }
}
