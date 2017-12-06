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
      isCount:true
    }
    this.changeLike = this.changeLike.bind(this)
    this.toggleCount = this.toggleCount.bind(this)
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
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App
