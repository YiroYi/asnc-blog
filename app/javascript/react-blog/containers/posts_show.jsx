import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';
import PostDelete from './post_delete';

class PostsShow extends Component {
  componentWillMount() {
    if (!this.props.post) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }
    const src = this.props.post.photo_url;
    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.body}</p>
          <p>{this.props.post.created_at}</p>
          <p>{this.props.post.updated_at}</p>
          <img src={src} alt="" />
        </div>
        <Link to="/">
          Back
        </Link>
        <PostDelete id={this.props.post.id} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idUrl = parseInt(ownProps.match.params.id, 10);
  const post = state.posts.find(p => p.id === idUrl);
  return { post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
