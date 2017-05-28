import React, { Component } from 'react';

export default class Input extends Component {
  handleSubmit() {
    this.preventDefault;
  }
  render() {
    return (
      <form>
        <input placeholder="Write a comment"></input>
        <button action="handleSubmit">Submit</button>
      </form>
    );
  }
}
