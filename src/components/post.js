import React, { Component } from 'react';
import Image from './image';
import Caption from './caption';
import Meta from './meta';

export default class Post extends Component {
  constructor() {
    super();
    // set initial state
  }
  render() {
    let likes = 0;
    return (
      <div className="post">
        <div className="user-name">User Name</div>
        <Image />
        <Caption />
        <Meta />
      </div>
    );
  }
}
