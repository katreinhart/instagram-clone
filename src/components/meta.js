import React, { Component } from 'react';

export default class Meta extends Component {
  render() {
    return(
      <div className="post-meta">
        <div className="posted-at">Posted At: </div>
        <div className="likes">Likes: {this.props.likes}</div>
        <button onClick={this.props.addLike} className="like">Like</button>
      </div>
    )
  }
}
