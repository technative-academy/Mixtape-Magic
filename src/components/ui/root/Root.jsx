import styles from './root.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import { Outlet } from "react-router-dom";

function Root() {
	return (
		<div className={styles.container}>
			<Header />
			<Outlet/>
			<Footer />
		</div>
	);
}

export default Root;
