import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

const POSTS = [
  {title: "New release", body: "C'est vraiment super", id: 4, createdAt: Date.now()},
  {title: "New release", body: "C'est vraiment super", id: 3, createdAt: Date.now() - 1000}
];

const CATALOG = [
  {id: 1, title: "Robe de soirée"},
  {id: 2, title: "Robe de soirée"},
  {id: 3, title: "Robe de soirée"},
  {id: 4, title: "Robe de soirée"},
  {id: 5, title: "Robe de soirée"},
  {id: 6, title: "Robe de soirée"},
  {id: 7, title: "Robe de soirée"},
]

class Post extends Component {
  render() {
    return (
      <div className="App-post">
        <h2 className="App-post-title">{this.props.post.title}</h2>
        <div className="App-post-body">{this.props.post.body}</div>
      </div>
    )
  }
}

class Item extends Component {
  render() {
    const {item} = this.props; // deconstruction
    return (
      <a className="App-item" href="#">
        <img className="App-item-image" src={`1.png`}/>
        <div className="App-item-desc">
          <div className="App-item-title">{item.title}</div>
        </div>
      </a>
    )
  }
}

export class Home extends Component {
  render() {
    return (
    <div>
      <div>
        <div className="App-catalog">
          <div className="App-catalog-row">
            {CATALOG.slice(0, 3).map(item => <Item key={item.id} item={item}/>)}
          </div>
          <div className="App-catalog-row">
            {CATALOG.slice(3, 6).map(item => <Item key={item.id} item={item}/>)}
          </div>
        </div>
        <div className="App-ctas">CTAs</div>
      </div>
      <div className="App-blog">
        <h1 className="App-blog-header">Hot from the press</h1>
        <div className="App-blog-list">
          {POSTS.map(p => <Post key={p.id} post={p}/>)}
        </div>
      </div>
    </div>
)}}

function MjLink(props) {
  return <Link activeClassName="active" {...props}/>;
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-top">
            <div className="App-logo">
              <a href="#"><img src="logo.jpg"/></a>
            </div>
            <h1 className="App-name">
              Marie Jordane
            </h1>
            <div className="App-infos">
              <i className="fa fa-map-marker"/>11 rue Bedaine, 75017 Paris
              <br/><i className="fa fa-whatsapp"/>whatsapp
              <br/><i className="fa fa-phone"/>06 12 34 56 78
              <br/><i className="fa fa-facebook"/> <i className="fa fa-instagram"/> <i className="fa fa-twitter"/>
            </div>
          </div>
          <div className="App-menu">
            <MjLink to="/">Home</MjLink>
            <a href="#">Shop</a>
            <a href="#">Blog</a>
            <MjLink to="/about">About us</MjLink>
          </div>
        </div>
        <div className="App-main">
          {this.props.children}
        </div>
      </div>
    );
  }
}
