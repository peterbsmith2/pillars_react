import React from 'react'
import DatePicker from '../containers/DatePicker'
import AddEntry from '../containers/AddEntry'
import DaysPillarsTable from '../containers/DaysPillarsTable'

const Dashboard = () => {
  return (
    <div>
      <DatePicker />
      <AddEntry />
      <DaysPillarsTable />
    </div>
  )
}

export default Dashboard
