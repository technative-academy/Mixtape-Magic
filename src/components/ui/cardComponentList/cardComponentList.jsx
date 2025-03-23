import CardComponent from '../cardComponent/CardComponent'
import LoadingComponent from '../loadingComponent/LoadingComponent'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylists } from '../../../slices/playlistSlice'
import styles from '../cardComponentList/cardComponentList.module.css'
import Search from '../search/Search'

function CardComponentList(props) {
    const { playlists, status, error } = props
    const dispatch = useDispatch()
    const [filteredPlaylists, setFilteredPlaylists] = useState([])
    const [sortOption, setSortOption] = useState('name')

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch])

    useEffect(() => {
        setFilteredPlaylists(playlists)
    }, [playlists])

    const sortPlaylists = (option) => {
        let sortedPlaylists
        if (option === 'name') {
            sortedPlaylists = [...filteredPlaylists].sort((a, b) =>
                a.name.localeCompare(b.name)
            )
            setFilteredPlaylists(sortedPlaylists)
        }
    }

    const handleSortChange = () => {
        setSortOption('name')
        sortPlaylists('name')
    }

    return (
        <div>
            <div className={styles.sortSearchContainer}>
                <div>
                    <button
                        onClick={handleSortChange}
                        className={styles.sortButton}
                    >
                        Sort by Name
                    </button>
                </div>
                <Search
                    playlists={playlists}
                    onSearch={(filtered) => setFilteredPlaylists(filtered)}
                />
            </div>
            <div className={styles.playlists}>
                {status === 'loading' && <LoadingComponent />}
                {status === 'failed' && <div>{error}</div>}
                {filteredPlaylists.length === 0 && status === 'succeeded' && (
                    <div>No playlists found</div>
                )}
                {filteredPlaylists.map((playlist) => (
                    <CardComponent key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    )
}

export default CardComponentList
