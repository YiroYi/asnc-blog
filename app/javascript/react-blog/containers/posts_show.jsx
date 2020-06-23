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
    const src_user = this.props.post.photo_url_user;
    return (
      <div>
        <div className="card">
          <div className="card-content d-flex flex-row justify-content-around flex-wrap">
            <div className="mr-2 post-content">
              <img src={src} alt="" />
            </div>
            <div className="ml-5">
              <h3 className="text-center link-style-header">{this.props.post.title}</h3>
              <p className="text-center">created: {this.props.post.created_at} |
              updated: {this.props.post.updated_at}</p>
              <p>{this.props.post.body}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex flex-row">
              <img src={src_user} className="show-post-avatar" alt="" />
              <h3 className="ml-2">Author:</h3>
            </div>
            <div>
              <p>This is {this.props.post.name} a cool {this.props.post.role}, who lives in {this.props.post.location} </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-right">
            <Link className="btn btn-dark" to="/">
              Back to All Posts
            </Link>
          </div>
          <div className="col-6">
            <PostDelete id={this.props.post.id} />
          </div>
        </div>
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
