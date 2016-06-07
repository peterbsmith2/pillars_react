import React from 'react'
import PillarsTable from '../components/PillarsTable'
import Header from '../components/Header'
import Controls from '../containers/DatePicker'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App
