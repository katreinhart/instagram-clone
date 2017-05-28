import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    let likes = 0;
    return (
      <div className="post">
        <div className="user-name">User Name</div>
        <img src="#" />
        <div className="post-caption">Caption</div>
        <div className="posted-at">Posted At: </div>
        <div className="likes">Likes: {likes}</div>
        <button className="like">Like</button>
      </div>
    );
  }
}
