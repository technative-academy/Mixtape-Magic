import { useState } from 'react'
import styles from './search.module.css'
import search from '../../../assets/img/search.png'

function Search() {
    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type="search"
                placeholder="search playlist..."
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
