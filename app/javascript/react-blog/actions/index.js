// TODO: add and export your own actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

// Function to connect to RAILS API to fetch all the posts
const url = "http://127.0.0.1:3000/api/v1/posts";

export function fetchPost(id) {
  const promise = fetch(`http://127.0.0.1:3000/api/v1/posts/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  };
}

export function fetchPosts() {
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function deletePost(id) {
  const request = fetch(`http://127.0.0.1:3000/api/v1/posts/${id}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id)
    }).then(response => response.json())
      .then(window.location.href = "/");

  return {
    type: DELETE_POST,
    payload: request
  };
}
