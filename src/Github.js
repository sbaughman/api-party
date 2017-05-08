import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Github.css';

class UserBio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar_url: '',
      followers: '',
      following: '',
      login: '',
      location: '',
      html_url: ''
    };
  }

  componentWillMount() {
    this.getUserData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged) {
      this.getUserData(nextProps);
    }
  }

  getUserData(props) {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(res => res.json())
      .then(data => this.setState({...data}))
      .catch(err => console.warn(err))
  }
  
  render() {
    let el;
    if (this.state.login) {
      el = 
        <span>
          <img src={this.state.avatar_url} alt="user" />
          <h2>{this.state.login}</h2>
          <h3>followers: {this.state.followers}</h3>
          <h3>following: {this.state.following}</h3>
          <h3>location: {this.state.location}</h3>
          <a href={this.state.html_url} target="_">Link to {this.state.login}'s profile</a>
        </span>
    } else {
      el = "LOADING..."
    }
    return (
      <div className="user-bio">
        {el}
      </div>
    );
  }
}

class Github extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const newState = {...this.state};
    newState.username = e.target.value;
    this.setState({...newState});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/github/${this.state.username}`);
  }

  render() {
    return (
      <div className="github">
        <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input value={this.state.username} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Look up github user</button>
          </div>
        </form>

        <Route exact path={this.props.match.url} render={() => (
          <h3>Please enter a username to search on Github</h3>
        )} />
        <Route path={`${this.props.match.url}/:username`} component={UserBio} />
      </div>
    );
  }
}

export default Github;