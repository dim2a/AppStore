import React from 'react'
import classes from './Navigation.css'

const Navigation = () => {
    return(
        <div className={classes.Navigation}>
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
        </div>
    )
}

export default Navigation