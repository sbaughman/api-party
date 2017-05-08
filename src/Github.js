import React, { Component } from 'react';
import './Github.css';

function UserBio (props) {
  return (
    <div className="github">
      <img src={props.avatar_url} />
      <h2>{props.login}</h2>
      <h3>followers: {props.followers}</h3>
      <h3>following: {props.following}</h3>
      <h3>location: {props.location}</h3>
    </div>
  );
}

class Github extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar_url: '',
      followers: '',
      following: '',
      login: '',
      location: ''
    };
  }

  componentWillMount() {
    fetch('https://api.github.com/users/sbaughman')
      .then(res => res.json())
      .then(data => this.setState({...data}, () => console.log(this.state)))
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <div>
        <h2>Github, yo</h2>
        {this.state.login ? <UserBio {...this.state} /> : "LOADING..."}
      </div>
    );
  }
}

export default Github;