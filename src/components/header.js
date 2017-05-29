import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <div className = "site-header">
        <span className="logo"></span><h1>Instagram Clone</h1> | <span className="discover">Discover</span> | <span class="user">Profile</span>
      </div>
    );
  }
}
