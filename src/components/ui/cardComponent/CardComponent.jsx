import styles from './cardComponent.module.css'

function CardComponent() {
    return (
        <section className={styles.collectionCard}>
            <h2 className={styles.title}>Title of Collection</h2>
            <p className={styles.tag}>TAG</p>
            <div className={styles.timestamps}>
                <p className={styles.created}>
                    CREATED <span>Today, at 2:09 PM</span>
                </p>
                <p className={styles.updated}>
                    LAST UPDATED <span>Today, at 2:09 PM</span>
                </p>
            </div>
            <div className={styles.iconSection}>
                <span className={styles.count}>0</span>
            </div>
        </section>
    )
}

export default CardComponent
