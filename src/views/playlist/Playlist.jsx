import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPlaylistById } from '../../slices/singlePlaylistSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import PlaylistNav from '../../components/ui/playlistNav/PlaylistNav'
import LoadingComponent from '../../components/ui/loadingComponent/LoadingComponent'
import styles from '../../components/ui/main/main.module.css'
import thumbnail from '../../assets/img/thumbnail.jpg'
import playlistStyles from './playlist.module.css'
import audio from '../../assets/audio/sound.mp3'
import { formatDistanceToNow } from 'date-fns'

const Playlist = () => {
    const {
        item: playlist,
        status,
        error,
    } = useSelector((state) => state.singlePlaylist)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            dispatch(fetchPlaylistById(id))
        }
    }, [dispatch, id])

    if (!id) {
        return <div>No playlist selected.</div>
    }
    if (status === 'loading') return <LoadingComponent />
    if (status === 'failed') return <p>Error: {error}</p>
    if (!playlist) return <p>No playlist selected.</p>

    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <div className={playlistStyles.playlist}>
                    <section className={playlistStyles.playlist__songs}>
                        <h1>{playlist.name}</h1>
                        <div className={playlistStyles.playlist__songs__info}>
                            <p>
                                <b>{playlist.owner.username}</b>
                            </p>
                            •
                            <p>
                                <b>{playlist.song_count} </b>
                                songs
                            </p>
                            •
                            <p>
                                {formatDistanceToNow(
                                    new Date(playlist.date_created),
                                    {
                                        addSuffix: true,
                                    }
                                )}
                            </p>
                        </div>
                        <Link
                            className={playlistStyles.playlist__edit}
                            to={`/playlist/${id}/edit/`}
                        >
                            Edit Playlist
                        </Link>
                        {playlist.songs.map((song) => (
                            <div
                                key={song.ID}
                                className={playlistStyles.playlist__song}
                            >
                                <p>{song.title}</p>
                                <p>{song.artist}</p>
                                <audio controls>
                                    <source
                                        src={audio} // add this later on when we get real tracks {`${import.meta.env.VITE_API_URL}/${song.file}`}
                                        type="audio/mpeg"
                                    />
                                </audio>
                            </div>
                        ))}
                    </section>
                    <section className={playlistStyles.playlist__thumbnail}>
                        <img
                            // src={`${import.meta.env.VITE_API_URL}/${playlist.coverImage}`} save this for when images work from the backend
                            src={thumbnail}
                            className={playlistStyles.playlist__thumbnail__img}
                            alt="Playlist Cover"
                        />
                        <p className={playlistStyles.playlist__thumbnail__tag}>
                            rock
                        </p>
                        <p className={playlistStyles.playlist__thumbnail__tag}>
                            jazz
                        </p>

                        <div className="">
                            <p>Description</p>
                            <p>{playlist.description}</p>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Playlist
