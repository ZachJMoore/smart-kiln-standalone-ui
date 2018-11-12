import React, { Component } from 'react';
import Kiln from '../lib/kiln';
let kiln = new Kiln()

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      kiln: {}
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
        .then(object => {
          this.setState({schedules: object})
        })
        .catch(console.log)
    }
  }

  componentDidMount(){
    this.updatePackage()
    this.updateSchedules()

    setInterval(this.updatePackage, 1000)
  }

  render() {
    return (
      <div className="App">
        <h1>Temperature: {this.state.kiln.temperature}</h1>
      </div>
    );
  }
}

export default App;
