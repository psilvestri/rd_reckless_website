import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom"

import Header from "./components/header/header.component"
import Home from "./pages/home/home.component"
import Blog from "./pages/blog/blog.component"
import About from "./pages/about/about.component"
import Contact from "./pages/contact/contact.component"

import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  componentDidMount() {
    fetch('https://demo.ghost.io/ghost/api/v3/content/posts')
    .then(response => response.json())    
    .then(response => console.log(response))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="blog" element={ <Blog/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
        </Routes>
      </div>
    )
  }
}

export default App