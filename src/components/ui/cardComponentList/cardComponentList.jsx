import CardComponent from "../cardComponent/CardComponent";
import styles from "../cardComponentList/cardComponentList.module.css";

function CardComponentList() {
  return (    
    <div className={styles.playlists}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
    </div>
  );
};

export default CardComponentList;