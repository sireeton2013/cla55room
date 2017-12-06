import React, { Component } from 'react';
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Like',
      count: 0
    }
    this.changeLike = this.changeLike.bind(this)
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  changeLike() {
    this.setState({message: 'unlike'})
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <p>{this.state.message}</p>
        <p><button onClick={this.changeLike}>Change</button></p>
        <Header />
        <Content title='d0mmie' />
        <Footer />
      </div>
    );
  }
}

export default App
