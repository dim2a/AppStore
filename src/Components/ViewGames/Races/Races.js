import React from 'react'
import classes from './Races.css'

const Races = props => {

    const gamesItems = props.races.map((el) => {
        return(
            <div className={classes.gamesItem}>
                <a href="/" className={classes.itemLink}>
                    <div className={classes.cover}>
                        <img src={el.img} alt='logo' />
                    </div>
                    <div className={classes.detail}>
                        <p>{el.name}</p>
                    </div>
                    <div className={classes.statistic}>
                        <p>{`Скачано ${el.counter} раз`}</p>
                    </div>
                </a>
            </div>
        ) 
    })

    return (
        <div className={classes.Races}>
            { gamesItems }
        </div>
    )
}

export default Races