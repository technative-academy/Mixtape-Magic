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
    const [sortOption, setSortOption] = useState('none')

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch])

    useEffect(() => {
        setFilteredPlaylists(playlists)
    }, [playlists])

    const sortPlaylists = (option) => {
        let sortedPlaylists = [...filteredPlaylists]
        if (option === 'name') {
            sortedPlaylists.sort((a, b) => a.name.localeCompare(b.name))
        } else if (option === 'date') {
            sortedPlaylists.sort(
                (a, b) => new Date(b.date_created) - new Date(a.date_created)
            )
        }
        setFilteredPlaylists(sortedPlaylists)
    }

    const handleSortChange = (event) => {
        const option = event.target.value
        setSortOption(option)
        if (option === 'none') {
            setFilteredPlaylists(playlists)
        } else {
            sortPlaylists(option)
        }
    }

    return (
        <div>
            <div className={styles.sortSearchContainer}>
                <div>
                    <select
                        onChange={handleSortChange}
                        value={sortOption}
                        className={styles.sortSelect}
                    >
                        <option value="none">No Sort</option>
                        <option value="name">Sort by Name</option>
                        <option value="date">Sort by Date</option>
                    </select>
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
                    <div className={styles.empty}>
                        You dont have any playlists (T⌓T)
                    </div>
                )}
                {filteredPlaylists.map((playlist) => (
                    <CardComponent key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    )
}

export default CardComponentList
