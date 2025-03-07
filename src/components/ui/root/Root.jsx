import styles from './root.module.css';

import SiteNav from '../site-nav/SiteNav';

import Breadcrumb from '../breadcrumb/Breadcrumb';

import CardComponent from "../cardComponent/CardComponent";

function Root() {
	return (
		<div className={styles.wrapper}>
			<SiteNav />
			<Breadcrumb />
			<CardComponent/>
		</div>
	);
}

export default Root;
