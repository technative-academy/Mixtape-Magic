import styles from "./main.module.css";
import CardComponentList from "../cardComponentList/cardComponentList";
import Search from "../seacrh/Search";

function Main() {
  return (
    <main className={styles.main}>
      <Search />
      <CardComponentList />
    </main>
  );
};

export default Main;
