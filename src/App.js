import React, { Component } from 'react';
import classes from './App.css';
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import Content from './Components/Content/Content'
import Layout from './hoc/Layout/Layout'
import Puzzles from './Components/ViewGames/Puzzles/Puzzles'
import {Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  puzzles = () => <Puzzles puzzles={this.props.state.games.puzzles}/>

  render() {
    return (
      <div  className={classes.wrapper}>
        <Header />
        <Navigation />
        <Layout>
          <Switch>
            {/* <Content games={this.props.state.games} /> */}
            <Route path='/puzzles' component={this.puzzles} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      </div>
    )
  }

}

export default App