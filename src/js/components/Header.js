import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="row">
      <header className="clearfix">
        <Link to="/dashboard">
          <h1 className="pull-left">Pillars</h1>
        </Link>
        <nav className="btn-group pull-right">
          <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Charts
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" role="menu">
            <li><Link to="/daily-donut">Daily Donut</Link></li>
            <li><Link to="/activity-chart">Activity Chart</Link></li>
            <li><Link to="/weekly-activity-chart">Weekly Activity Chart</Link></li>
            <li><Link to="/stacked-chart">Stacked Chart</Link></li>
            <li><Link to="/annual-calendar">Annual Calendar</Link></li>
            <li><Link to="/data-explorer">Data Explorer</Link></li>
          </ul>
        </nav>
        <nav className="btn-group pull-right">
          <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            View
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" role="menu">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/summary">Summary</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
