import React, { Component } from 'react';
import Post from './post';
import Input from './input';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
        <Post />
        <Post />
        <Input />
      </div>
    );
  }
}
