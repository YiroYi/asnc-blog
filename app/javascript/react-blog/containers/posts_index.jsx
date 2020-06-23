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
      const src_user = post.photo_url_user;
      return (
            <div className="card">
              <div className="row card-top">
                <div className="col-9">
                  <div id="card-post-title">
                    <Link to={`/posts/${post.id}`} key={post.id}  style={{ textDecoration: 'none' }}>
                      <span className="link-style-header">
                        <p className="card-title-line-height">{post.title}</p>
                      </span>
                    </Link>
                  </div>
                  <div className="card-time">
                    <p>created {post.created_at}</p>
                    <p>updated {post.updated_at}</p>
                  </div>
                  <div className="card-tag">
                    <p><i className="fas fa-tags"></i>{post.tags}</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col-8 text-right">
                      <img className="avatar-large" src={src_user} alt="" />
                    </div>
                    <div className="col-4 card-user-info text-left">
                      <h4 id="card-user-name">{post.name}</h4>
                      <p>{post.role}</p>
                      <p className="card-location-line-height">{post.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row card-content">
                <div className="col-3">
                  <img src={src} alt="" />
                </div>
                <div className="col-9 card-post-body">
                  <p className="card-displayed-text">{post.body}</p>
                </div>
              </div>
            </div>
      );
    });
  }


  render() {
    return (
      <div>
        <div className="first-row align-middle">
          <div className="text-left">
          </div>
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
