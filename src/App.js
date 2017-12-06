import React, { Component } from 'react';
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App
