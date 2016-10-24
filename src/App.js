import React, { Component } from 'react';
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
        <img className="App-item-image" src={`${item.id}.png`}/>
        <div className="App-item-over">
          <div className="App-item-title">{item.title}</div>
          <div className="App-item-button">See Details &rarr;</div>
        </div>
      </a>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <a href="#"><img src="logo.jpg"/></a></div>
          <div className="App-menu">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Blog</a>
            <a href="#">About us</a>
          </div>
        </div>
        <div className="App-main">
          <div className="App-catalog">
            {CATALOG.slice(0, 6).map(item => <Item key={item.id} item={item}/>)}
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
    );
  }
}

export default App;
