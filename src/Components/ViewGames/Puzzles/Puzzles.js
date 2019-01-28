import React from 'react'
import classes from './Puzzles.css'

const Puzzles = props => {

    const gamesItems = props.puzzles.map((el) => {
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
        <div className={classes.Puzzles}>
            { gamesItems }
        </div>
    )
}

export default Puzzles