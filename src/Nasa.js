import React, { Component } from 'react'

import './Nasa.css'

class Nasa extends Component {
  constructor(props) {
    super(props)
    this.state ={
      roverName: '',
      imageUrl: '',
      camera: '',
      earthDate: '',
    }
  }

  componentWillMount() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-05-30&camera=fhaz&api_key=DEMO_KEY')
      .then(res => res.json())
      .then(data => this.setState({
        roverName: data.photos[0].rover.name,
        imageUrl: data.photos[0].img_src,
        earthDate: data.photos[0].earth_date
      }))
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <div className="nasa">
        <img className="nasa-logo" src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" alt="nasa" />

        <div className="rover-info">
          <h2>Mars Rover Name: {this.state.roverName}</h2>
          <h3>Earth Date: {this.state.earthDate}</h3>
          <img src={this.state.imageUrl} />
        </div>
      </div>
    )
  }
}

export default Nasa