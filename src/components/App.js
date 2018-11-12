import React, { Component } from 'react';
import {Route, Link} from "react-router-dom"


import Kiln from '../lib/kiln';
let kiln = new Kiln()

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      kiln: {},
      schedules: []
    }

    this.updatePackage = () => {

      kiln.getPackage()
        .then(data=>data.json())
        .then(object => {
          this.setState({kiln: object})
        })
        .catch(console.log)
    }

    this.updateSchedules = () => {

      kiln.getSchedules()
        .then(data=>data.json())
        .then(array => {
          this.setState({schedules: array})
        })
        .catch(console.log)
    }
  }

  componentDidMount(){
    this.updatePackage()
    this.updateSchedules()

    setInterval(this.updatePackage, 60000)
  }

  render() {
    return <>
      <div className="menu">
        <div className="temperature">{this.state.kiln.temperature}ºF</div>
        <Link className="graph" to="/">Graph</Link>
        <Link className="schedules" to="/schedules">Schedules</Link>
        <Link className="controls" to="/controls">Controls</Link>
        <Link className="settings" to="/settings">Settings</Link>
      </div>
      <div className="body">
      
        <Route exact path="/" render={()=>{
          return (
            <div>graph</div>
          )
        }} />

        <Route exact path="/schedules" render={()=>{
          return (
            <div>schedules</div>
          )
        }} />

        <Route exact path="/controls" render={()=>{
          return (
            <div>controls</div>
          )
        }} />

        <Route exact path="/settings" render={()=>{
          return (
            <div>settings</div>
          )
        }} />

      </div>
    </>;
  }
}

export default App;
