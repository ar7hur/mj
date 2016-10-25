import React from 'react';
import ReactDOM from 'react-dom';
import App, {Home} from './App';
import { Router, Route, Link, browserHistory } from 'react-router'

class About extends React.Component {
  render() {
    return (
      <div className="hello">Hello</div>
)}}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
    	<Route path="/" component={Home}></Route>
    	<Route path="about" component={About}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
