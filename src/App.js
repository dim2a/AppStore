import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <header className={classes.header}>          
          <a href="/" className={classes.logo}>
            <img src='https://vignette.wikia.nocookie.net/reckoning/images/e/e4/EA_Games_logo.png/revision/latest?cb=20110527201122' alt='logo' />
          </a>
          <a href="/" className={classes.user}>
          <img src='http://icons.iconarchive.com/icons/icons8/ios7/256/Users-User-Male-4-icon.png' alt='user' />
          </a>          
        </header>
        <nav className={classes.nav}>
          <ul>
            <li>
              <a href="/">Головоломки</a>
            </li>
            <li>
              <a href="/">Гонки</a>
            </li>
            <li>
              <a href="/">Cпорт</a>
            </li>
            <li>
              <a href="/">Карточные</a>
            </li>
            <li>
              <a href="/">Экшен</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
          </ul>
        </nav>
        <div className={classes.content}>Content</div>
      </div>
    );
  }
}

export default App;