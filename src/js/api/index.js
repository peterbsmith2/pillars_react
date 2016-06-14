import { v4 } from 'node-uuid'
import moment from 'moment'

const fakeDatabase = {
  entries: [
    {
      id: v4(),
      pillar: "ZAZEN",
      duration: "00:30",
      //start: Wed Jun 08 2016 16:00:00
      start: 1465401600000,
      quality: "YAY",
      notes: "half lotus",
      isEditing: false
    },
    {
      id: v4(),
      pillar: "ZAZEN",
      duration: "00:30",
      //start: Mon Jun 06 2016 03:00:00 (UTC)
      start: 1465182000000,
      quality: "YAY",
      notes: "half lotus",
      isEditing: false
    },
    {
      id: v4(),
      pillar: "ZAZEN",
      duration: "00:45",
      //start: Tue Jun 07 2016 02:00:00 (UTC)
      start: 1465264800000,
      quality: "YAY",
      notes: "full lotus",
      isEditing: false
    }
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchEntries = (day) =>
  delay(500).then(() => {
    const parsedDay = moment(day, "YYYY-MM-DD")
    let endOfDay = moment(day, "YYYY-MM-DD").add(1, 'd')

    return fakeDatabase.entries.filter(entry => {
      const start = moment(entry.start)
      return start.isBetween(parsedDay, endOfDay)
    })
  })

export const addEntry = (submission) =>
  delay(500).then(() => {
    const entry = {
      // can use ES7 object spread here like:
      // ...submission
      id: v4(),
      pillar: submission.pillar,
      duration: submission.duration,
      start: submission.start,
      quality: submission.quality,
      notes: submission.notes
      //NOTE: isEditing shouldn't go to the database, it needs a new home
    }
    fakeDatabase.entries.push(entry)
    return entry
  })

export const removeEntry = (submission) =>
  delay(500).then(() => {
    let response = {}
    fakeDatabase.entries = fakeDatabase.entries.filter(entry => {
      if (submission.id === entry.id ) { response = entry }
      return submission.id !== entry.id
    })
    return response
  })
  //TODO: add removeEntry and editEntry functions
