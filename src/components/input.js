import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as inputActions from '../actions/comment'
import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input placeholder="Write a comment"></input>
        <button onClick={() => this.onAddComment(comment)}>Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    comment: state.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inputActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
