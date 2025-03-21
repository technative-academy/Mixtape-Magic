import React from 'react'
import { Link } from 'react-router-dom'
import styles from './cardComponent.module.css'
import thumbnail from '../../../assets/img/thumbnail.jpg'
import playLogo from '../../../assets/img/play-button.png'
import { formatDistanceToNow } from 'date-fns'

function CardComponent(props) {
    const { playlist } = props
    console.log(playlist)
    return (
        <Link className={styles.card} to={`/playlist/${playlist.id}/`}>
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
                    User <b>{playlist.owner.username}</b>
                </p>
                <p className={styles.card__user}>
                    Track Count <b>{playlist.song_count}</b>
                </p>

                <small className={styles.card__user}>
                    Date Created{' '}
                    <b>
                        {formatDistanceToNow(new Date(playlist.date_created), {
                            addSuffix: true,
                        })}
                    </b>
                </small>
            </div>

            <button className={styles.card__play}>
                <img src={playLogo} />
            </button>
        </Link>
    )
}

export default CardComponent
