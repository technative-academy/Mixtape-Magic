import styles from './root.module.css';

import Breadcrumb from '../breadcrumb/Breadcrumb';

function Root() {
	return (
		<div className={styles.wrapper}>
			<Breadcrumb />
		</div>
	);
}

export default Root;
