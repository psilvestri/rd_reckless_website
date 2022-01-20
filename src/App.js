import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/header/header.component"
import HomePage from "./pages/home/home-page.component"
import BlogPage from "./pages/blog/blog-page.component"
import AboutPage from "./pages/about/about-page.component"
import ContactPage from "./pages/contact/contact-page.component"

import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="blog" element={ <BlogPage/> } />
          <Route path="about" element={ <AboutPage/> } />
          <Route path="contact" element={ <ContactPage/> } />
        </Routes>
      </div>
    )
  }
}

export default App