import styles from './root.module.css';
import Header from '../header/Header';

import { Outlet } from "react-router-dom";

function Root() {
	return (
		<div className={styles.container}>
			<Header />
			<Outlet/>
		</div>
	);
}

export default Root;
