import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPlaylistById } from '../../slices/singlePlaylistSlice'
import { useDispatch } from 'react-redux'
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

    console.log(id)

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

    const songCount = playlist.songs.length

    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <div className={playlistStyles.playlist}>
                    <section className={playlistStyles.playlist__details}>
                        <img
                            // src={`${import.meta.env.VITE_API_URL}/${playlist.coverImage}`} save this for when images work from the backend
                            src={thumbnail}
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
                                    <p>{song.name}</p>
                                    <p>{song.artist}</p>
                                </div>
                                <audio controls>
                                    <source
                                        src={`${import.meta.env.VITE_API_URL}/${song.file}`}
                                        type="audio/mpeg"
                                    />
                                </audio>
                            </div>
                        ))}
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Playlist
