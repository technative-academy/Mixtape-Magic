import styles from "./search.module.css";
import search from '../../../assets/img/search.png'; 

function Search() {
  return (
    <div className={styles.search} >
        <input className={styles.search__input} type="search" />
        <button className={styles.search__icon}><img src={search} alt="The logo of the company"/></button>
    </div>
  );
};

export default Search;
