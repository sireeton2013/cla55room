import React, { Component } from 'react';
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Like',
      count: 0,
      isCount: true,
      reactMessage: '',
      inputMessage: ''
    }
    this.changeLike = this.changeLike.bind(this)
    this.toggleCount = this.toggleCount.bind(this)
    this.addReact = this.addReact.bind(this)
  }
  componentDidMount() {
    setInterval(() => {
      if(this.state.isCount){
        this.setState({count: this.state.count + 1})
      }
    }, 1000)
  }

  changeLike() {
    this.setState({message: 'Unlike'})
  }

  toggleCount() {
    this.setState({isCount: !this.state.isCount})
  }

  addReact() {
    this.setState({reactMessage: this.state.reactMessage + 'React'})
  }

  setInput(e) {
    this.setState({inputMessage: e.target.value})
  }

  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <Header />
          <hr className="my-4" />
          <div>
            <p className='lead'>
              <span>[ {this.state.count} ]</span>&nbsp;&nbsp;&nbsp;<span>[ Counting: {this.state.isCount.toString()} ]</span>&nbsp;&nbsp;&nbsp;<button className="btn btn-primary" onClick={this.toggleCount}>Toggle</button>
            </p>
            <p className='lead'>
              <span>[ {this.state.message} ]</span>&nbsp;&nbsp;&nbsp;<button className="btn btn-primary" onClick={this.changeLike}>Change</button>
            </p>
          </div>
          <Content title='d0mmie' />
          <hr className="my-4" />
          <Footer />
        </div>
        <div className="jumbotron">
          <h1 className='display-3'>Day 3</h1>
          <hr className="my-4" />
          <div>
            <p className='lead'>
            <button className="btn btn-primary" onClick={this.addReact}>Append</button>&nbsp;&nbsp;&nbsp;<span style={{color:'red'}} >[ {this.state.reactMessage} ]</span>
            </p>
            <p className='lead'>
              [ Welcome: {this.state.inputMessage} ]
            </p>
            <p className="lead">
              <input className='form-control' type="text" value={this.state.inputMessage} onChange={this.setInput.bind(this)} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App
