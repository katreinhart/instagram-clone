import React, { Component } from 'react';
import Post from './post';
import Input from './input';

export default class App extends Component {
  render() {
    return (
      <div>Kats Instagram Clone
        <Post />
        <Input />
      </div>
    );
  }
}
