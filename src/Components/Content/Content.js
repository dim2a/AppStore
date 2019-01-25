import React from 'react'
import classes from './Content.css'

const Content = props => {

    const gamesItems = props.games.puzzles.map((el) => {
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
        <div className={classes.Content}>
           { gamesItems }
        </div>
    )
}

export default Content


