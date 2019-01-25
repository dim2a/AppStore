import React, { Component } from 'react';
import classes from './App.css';
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import Content from './Components/Content/Content'
import Layout from './hoc/Layout/Layout'

let games = {
  puzzles : [
    {id: 1, name: 'asd', img: 'https://lh3.googleusercontent.com/MPsMoIDG-sjsSzkAoNZeYPTo0wfjm_AemMNrgChj826Np0UxUoA46sTKfVY58HscO7w=s180', counter:10},
    {id: 2, name: 'asd', img: 'https://lh3.googleusercontent.com/c7KS4VRehzA6KQ1aNHuhZgM5fdjrTSb0L8mnOL0bpKM6sVTgESjwYe09ns8sFKcFTvQ=s180', counter:5},
    {id: 3, name: 'asd', img: 'https://lh3.googleusercontent.com/OoAWo-XEztwlvJV6sxxZs5xpso48ZqpossB5Pz1OS2yuUlg16qlPKzkjBKvxrVACGZgP=s180', counter:8},
    {id: 4, name: 'asd', img: 'https://lh3.googleusercontent.com/jt35uzoKyo-pfqTn04J9DwVumr9tNk2z3CdBOUEJnj1DeygYSq-BzkzV_A8UZy2Bnlv_=s180', counter:22},
    {id: 5, name: 'asd', img: 'https://lh3.googleusercontent.com/eP-n6dEzIbuFIlhFqI_4cTe9jKciRPdW1XSq2rDf0xgdC-iohdpL8Sl580BhZCwigkM=s180', counter:17},
    {id: 6, name: 'asd', img: 'https://lh3.googleusercontent.com/CBdTcT0JoukL0VzMLTUDOn_iFKEI_OUwXqRYknzBlUHIHzP8IKjUdCjV9-w2e5tH1xA=s180', counter:46},
    {id: 6, name: 'asd', img: 'https://lh3.googleusercontent.com/9px8lmdYS9C_tq8RcJhTJQvQJR-66sUXx_c6QY6-RUxJRkry9Dn_ymmv5B1nbpMSGA=s180', counter:58},    
  ],
  race : [],
  sport : [],
  cards : [],
  action : []
}

class App extends Component {
  render() {
    return (
    <div className={classes.wrapper}>
      <Header />
      <Navigation />
      <Layout>
        <Content games={games} />
      </Layout>
      </div>
    )
  }
}

export default App;