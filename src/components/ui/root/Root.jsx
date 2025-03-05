import styles from './root.module.css';

import SiteNav from '../site-nav/SiteNav';

import Breadcrumb from '../breadcrumb/Breadcrumb';

function Root() {
	return (
		<div className={styles.wrapper}>
			<SiteNav />
			<Breadcrumb />
		</div>
	);
}

export default Root;
