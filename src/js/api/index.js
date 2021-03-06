import { v4 } from 'node-uuid'
import moment from 'moment'
import 'isomorphic-fetch'


const mockDatabase =
{
	"Error": false,
	"Message": "Success",
	"entries": [{
		"id": 4541,
		"pillar": "SOCIAL",
		"event_date": "2016-06-30 08:00:00",
		"duration": "01:00:00",
		"quality": "YAY",
		"notes": "Phone call with Sam",
		"entry_utc_timestamp": "2016-06-30 13:49:09"
	}, {
		"id": 4542,
		"pillar": "EAT WELL",
		"event_date": "2016-06-30 09:00:00",
		"duration": "00:25:00",
		"quality": "YAY",
		"notes": "Breakfast - 4 waffles",
		"entry_utc_timestamp": "2016-06-30 13:49:19"
	}, {
		"id": 4543,
		"pillar": "SLACK",
		"event_date": "2016-06-30 09:25:00",
		"duration": "00:05:00",
		"quality": "YAY",
		"notes": "Transitioning",
		"entry_utc_timestamp": "2016-06-30 13:49:37"
	}, {
		"id": 4544,
		"pillar": "ZAZEN",
		"event_date": "2016-06-30 09:30:00",
		"duration": "00:05:00",
		"quality": "YAY",
		"notes": "Half Lotus",
		"entry_utc_timestamp": "2016-06-30 13:49:55"
	}, {
		"id": 4545,
		"pillar": "SLACK",
		"event_date": "2016-06-30 09:35:00",
		"duration": "00:15:00",
		"quality": "YAY",
		"notes": "Transitioning",
		"entry_utc_timestamp": "2016-06-30 13:50:05"
	}, {
		"id": 4546,
		"pillar": "WORK",
		"event_date": "2016-06-30 09:50:00",
		"duration": "00:30:00",
		"quality": "YAY",
		"notes": "HOCPA Three Paths",
		"entry_utc_timestamp": "2016-06-30 14:20:08"
	}]
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchEntries = (day) => {

  return fetch('http://pillars.peterbsmith.net/api/log/' + day + '/' + day + 'T23:59:59')
  .then(response =>
    response.json().then(json => ({ json, response }))
  ).then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }

    return json

  })

}

export const addEntry = (submission) => {

  return fetch('http://pillars.peterbsmith.net/api/log/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submission)
  })
  .then(response =>
    response.json().then(json => ({ json, response }))
  )
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }

    return json

  })
}

export const removeEntry = (submission) => {

  return fetch('http://pillars.peterbsmith.net/api/log/', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submission)
  })
  .then(response => {

    if (!response.ok) {
      return Promise.reject(false)
    }

    return true

  })

}

//TODO: add editEntry functions
