import React from 'react'
import classes from './Navigation.css'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return(
        <div className={classes.Navigation}>
            <nav className={classes.nav}>
            <ul>
                <li>
                <NavLink to="/puzzles" activeClassName={classes.activeLink}>Головоломки</NavLink>
                </li>
                <li>
                <NavLink to="/races" activeClassName={classes.activeLink}>Гонки</NavLink>
                </li>
                <li>
                <NavLink to="/sports" activeClassName={classes.activeLink}>Cпорт</NavLink>
                </li>
                <li>
                <NavLink to="/cards" activeClassName={classes.activeLink}>Карточные</NavLink>
                </li>
                <li>
                <NavLink to="/action" activeClassName={classes.activeLink}>Экшен</NavLink>
                </li>
                <li>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Navigation