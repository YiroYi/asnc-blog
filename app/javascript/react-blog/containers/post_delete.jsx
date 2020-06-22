import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePost } from '../actions/index';

class PostDelete extends Component {

onClick = (id) => {
    this.props.deletePost(id);
  }

  render() {
      console.log("PROPS");
      console.log(this.props.id);
    return(
      <button className="btn btn-danger" onClick={this.onClick.bind(this, this.props.id)}>Delete</button>
      //.bind(this, this.props.id) first this is an argument of bind.
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deletePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostDelete);

