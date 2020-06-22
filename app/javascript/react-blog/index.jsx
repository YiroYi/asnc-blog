import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
//import { createBrowserHistory as history } from 'history';

// imposting CONTAINERS
import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';

// importing REDUCERS files
import PostsReducer from './reducers/posts_reducer';


// Create the STATE that will containe the POSTS data from our RAILS API
const reducers = combineReducers({
  posts: PostsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM

const root = document.getElementById('root');

const  initialState = {
  posts: JSON.parse(root.dataset.posts)
};

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/:id" exact component={PostsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  root
);
