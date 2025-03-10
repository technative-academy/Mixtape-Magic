import styles from './root.module.css';
import Header from '../header/Header';
import Main from '../main/Main';

import { Outlet } from "react-router-dom";

function Root() {
	return (
		<div className={styles.container}>
			<Header />
			<Main />
			<Outlet/>
		</div>
	);
}

export default Root;
