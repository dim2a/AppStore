import React from 'react'
import classes from './Navigation.css'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return(
        <div className={classes.Navigation}>
            <nav className={classes.nav}>
            <ul>
                <li>
                <NavLink to="/puzzles">Головоломки</NavLink>
                </li>
                <li>
                <NavLink to="/race">Гонки</NavLink>
                </li>
                <li>
                <NavLink to="/sports">Cпорт</NavLink>
                </li>
                <li>
                <NavLink to="/cards">Карточные</NavLink>
                </li>
                <li>
                <NavLink to="/action">Экшен</NavLink>
                </li>
                <li>
                <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Navigation