import React from 'react'
import { Link } from 'react-router-dom'
import styles from './cardComponent.module.css'
import thumbnail from '../../../assets/img/thumbnail.jpg'
import playLogo from '../../../assets/img/play-button.png'

function CardComponent(props) {
    const { playlist } = props
    return (
        <Link className={styles.card} to={`/playlist/${playlist.ID}/`}>
            <img
                src={thumbnail} // add playList.coverImage when possible
                alt="The thumbnail of the playlist"
                className={styles.card__img}
            />
            <div className={styles.card__details}>
                <p className={styles.card__title}>{playlist.name}</p>

                <small className={styles.card__tag}>tag</small>
                <small className={styles.card__tag}>rock</small>

                <p className={styles.card__user}>
                    User <b>{playlist.owner}</b>
                </p>

                <small className={styles.card__time}>
                    Made <b>{playlist.dateCreated}</b>
                </small>
            </div>

            <button className={styles.card__play}>
                <img src={playLogo} />
            </button>
        </Link>
    )
}

export default CardComponent
