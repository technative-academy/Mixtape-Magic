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

    const songCount = playlist.songs.length

    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <div className={playlistStyles.playlist}>
                    <section className={playlistStyles.playlist__details}>
                        <img
                            src={
                                playlist.image_url
                                    ? playlist.image_url
                                    : thumbnail
                            }
                            alt="Playlist Cover"
                        />
                        <div>
                            <h1>{playlist.name}</h1>
                            <small>tag</small>
                            <small>rock</small>
                            <p>{playlist.description}</p>
                            <p>
                                Songs <span>{songCount}</span>
                            </p>
                        </div>
                    </section>
                    <h2>Songs</h2>
                    <section className={playlistStyles.playlist__songs}>
                        {playlist.songs.map((song) => (
                            <div
                                key={song.ID}
                                className={playlistStyles.playlist__song}
                            >
                                <div>
                                    <p>{song.title}</p>
                                    <p>{song.artist}</p>
                                </div>
                                {song.song_url && (
                                    <audio controls>
                                        <source
                                            src={song.song_url}
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                )}
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
                    </section>
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
                </div>
            </section>
        </main>
    )
}

export default Playlist
