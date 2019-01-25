import React from 'react'
import classes from './Header.css'

const Header = () => {
    return(
        <div className={classes.Header}>
            <a href="/" className={classes.logo}>
                <img src='https://vignette.wikia.nocookie.net/reckoning/images/e/e4/EA_Games_logo.png/revision/latest?cb=20110527201122' alt='logo' />
            </a>
            <a href="/" className={classes.user}>
                <img src='http://icons.iconarchive.com/icons/icons8/ios7/256/Users-User-Male-4-icon.png' alt='user' />
            </a> 
        </div>
    )
}

export default Header