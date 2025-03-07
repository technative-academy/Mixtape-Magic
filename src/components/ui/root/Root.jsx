import styles from './root.module.css';
import Header from '../header/Header';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import CardComponent from "../cardComponent/CardComponent";

function Root() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumb />
			<CardComponent/>
		</div>
	);
}

export default Root;
