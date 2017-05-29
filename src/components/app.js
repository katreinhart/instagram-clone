import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Feed from './feed';
import Input from './input';
import Header from './header';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Feed />
        <Input />
      </div>
    );
  }
}
