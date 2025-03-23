import React from 'react'
import { Link } from 'react-router-dom'
import styles from './cardComponent.module.css'
import thumbnail from '../../../assets/img/thumbnail.jpg'
import playLogo from '../../../assets/img/play-button.png'
import { formatDistanceToNow } from 'date-fns'

function CardComponent(props) {
    const { playlist } = props
    return (
        <Link className={styles.card} to={`/playlist/${playlist.id}/`}>
            <img
                src={playlist.image_url ? playlist.image_url : thumbnail}
                alt="The thumbnail of the playlist"
                className={styles.card__img}
            />
            <div className={styles.card__details}>
                <h2 className={styles.card__title}>{playlist.name}</h2>

                <small className={styles.card__tag}>tag</small>
                <small className={styles.card__tag}>rock</small>

                <p className={styles.card__user}>
                    by <b>{playlist.owner.username}</b>
                </p>
                <p className={styles.card__user}>
                    songs <b>{playlist.song_count}</b>
                </p>

                <p className={styles.card__user}>
                    Created{' '}
                    <b>
                        {formatDistanceToNow(new Date(playlist.date_created), {
                            addSuffix: true,
                        })}
                    </b>
                </p>
            </div>

            <button className={styles.card__play}>
                <img src={playLogo} />
            </button>
        </Link>
    )
}

export default CardComponent
