import React, { Component } from 'react';
import classes from './App.css';
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import Content from './Components/Content/Content'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
    <div className={classes.wrapper}>
      <Header />
      <Navigation />
      <Layout>
        <Content games={this.props.state.games} />
      </Layout>
      </div>
    )
  }
}

export default App;