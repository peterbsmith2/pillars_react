const fakeDatabase = {
  entries: [
    {
      id: "sjkdl234",
      pillar: "ZAZEN",
      duration: "00:30",
      //start: Mon Jun 06 2016 03:00:00 (UTC)
      start: 1465182000000,
      quality: "YAY",
      notes: "half lotus",
      isEditing: false
    },
    {
      id: "sjfjkdsl",
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
  delay(5000).then(() => {
    // TODO: make this return based on the day passed in
    return fakeDatabase.entries
  })
