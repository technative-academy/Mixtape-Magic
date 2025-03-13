import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './cardComponent.module.css'
import logo from '../../../assets/img/thumbnail.jpg'
import playLogo from '../../../assets/img/play-button.png'

function CardComponent(props) {
    const { playlist } = props
    return (
        <NavLink className={styles.card} to={`/playlists/${playlist.id}/`}>
            <img
                src={logo} // add playList.coverImage when possible
                alt="The logo of the company"
                className={styles.card__img}
            />
            <div className={styles.card__details}>
                <p className={styles.card__title}>{playlist.name}</p>
                <small className={styles.card__tag}>tag</small>
                <small className={styles.card__tag}>rock</small>

                <small className={styles.card__time}>
                    Made <b>{playlist.dateCreated}</b>
                </small>
            </div>

            <button className={styles.card__play}>
                <img src={playLogo} />
            </button>
        </NavLink>
    )
}

export default CardComponent
