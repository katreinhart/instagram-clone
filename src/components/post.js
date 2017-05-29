import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from './image';
import Caption from './caption';
import Meta from './meta';

class Post extends Component {
  constructor() {
    super();
    state: {
      likes: 0
    }
    // set initial state
  }
  render() {
    return (
      <div className="post">
        <div className="user-name">User Name</div>
        <Image />
        <Caption />
        <Meta likes={this.state.likes}/>
      </div>
    );
  }
}

export default connect()(Post);
