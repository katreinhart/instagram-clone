import React, { Component } from 'react';
import Post from './post';

export default class Feed extends Component {
  render() {
    return(
      <div className="feed">
        <Post />
      </div>
    );
  }
}
