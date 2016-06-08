import React from 'react'
import PillarsTable from './PillarsTable'
import Header from './Header'
import Controls from '../containers/DatePicker'
import Dashboard from './Dashboard'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Dashboard />
      </div>
    )
  }
}

export default App
