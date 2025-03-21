import { useState } from 'react'
import styles from './search.module.css'
import search from '../../../assets/img/search.png'

function Search({ playlists, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        const term = e.target.value
        setSearchTerm(term)
        const lowercasedTerm = term.toLowerCase()
        const filteredPlaylists = playlists.filter(
            (playlist) =>
                playlist.name.toLowerCase().includes(lowercasedTerm) ||
                (playlist.description &&
                    playlist.description
                        .toLowerCase()
                        .includes(lowercasedTerm)) ||
                (playlist.tags &&
                    playlist.tags.some((tag) =>
                        tag.toLowerCase().includes(lowercasedTerm)
                    ))
        )
        onSearch(filteredPlaylists)
    }

    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type="search"
                placeholder="search playlist..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <img
                src={search}
                className={styles.search__icon}
                alt="The logo of the company"
            />
        </div>
    )
}

export default Search
