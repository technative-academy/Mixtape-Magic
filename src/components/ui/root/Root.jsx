import styles from './root.module.css';
import Header from '../header/Header';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import CardComponent from "../cardComponent/CardComponent";

import { Outlet } from "react-router-dom";

function Root() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumb />
			<CardComponent/>
			<Outlet/>
		</div>
	);
}

export default Root;
