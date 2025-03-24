import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPlaylistById } from '../../slices/singlePlaylistSlice'
import { deleteSong } from '../../slices/myPlaylistSlice'
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

    const { user } = useSelector((state) => state.auth)
    const [userOwnedPlaylist, setUserOwnedPlaylist] = useState(false)

    useEffect(() => {
        if (user && playlist) {
            setUserOwnedPlaylist(user.id === playlist.owner.id)
        }
    }, [user, playlist])

    const handleDeleteSong = (songId) => {
        dispatch(deleteSong({ songId, playlistId: id }))
            .then(() => {
                dispatch(fetchPlaylistById(id))
            })
            .catch((error) => console.error('Error deleting song:', error))
    }

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

                        {userOwnedPlaylist && (
                            <>
                                <Link
                                    className={playlistStyles.playlist__edit}
                                    to={`/playlist/${id}/edit/`}
                                >
                                    Edit Playlist
                                </Link>

                                <Link
                                    className={playlistStyles.playlist__edit}
                                    to={`/playlist/${id}/add-song/`}
                                >
                                    Add song
                                </Link>
                            </>
                        )}

                        {playlist.songs.length > 0 ? (
                            <>
                                {' '}
                                {playlist.songs.map((song) => (
                                    <div
                                        key={song.ID}
                                        className={
                                            playlistStyles.playlist__song
                                        }
                                    >
                                        <p>{song.title}</p>
                                        <p>{song.artist}</p>
                                        <audio controls>
                                            <source
                                                src={
                                                    song.song_url
                                                        ? song.song_url
                                                        : audio
                                                }
                                                type="audio/mpeg"
                                            />
                                        </audio>
                                        {userOwnedPlaylist && (
                                            <button
                                                className={
                                                    playlistStyles.playlist__edit
                                                }
                                                onClick={() =>
                                                    handleDeleteSong(song.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p className={playlistStyles.empty}>
                                Empty playlist (T⌓T)
                            </p>
                        )}
                    </section>

                    <section className={playlistStyles.playlist__thumbnail}>
                        <img
                            className={playlistStyles.playlist__thumbnail__img}
                            src={
                                playlist.image_url && playlist.image_url.trim()
                                    ? playlist.image_url
                                    : thumbnail
                            }
                            alt="Playlist Cover"
                        />
                        <p className={playlistStyles.playlist__thumbnail__tag}>
                            rock
                        </p>
                        <p className={playlistStyles.playlist__thumbnail__tag}>
                            jazz
                        </p>

                        <div
                            className={playlistStyles.playlist__thumbnail__desc}
                        >
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
