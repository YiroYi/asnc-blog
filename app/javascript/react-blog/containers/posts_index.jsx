import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      const src = post.photo_url;
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.created_at}</p>
            <p>{post.updated_at}</p>
            <img src={src} alt="" />
          </div>
        </Link>
      );
    });
  }


  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
              Let's write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

// This function allows this container to use fetchPosts() function
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

// This function connect this container to the redux reducer "PostsReducer"
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
