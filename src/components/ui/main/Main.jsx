import styles from "./main.module.css";
import CardComponent from "../cardComponent/CardComponent";

function Main() {
  return (
    <main className={styles.main}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
    </main>
  );
};

export default Main;
