import { Fragment } from 'react';
import Head from 'next/head';

import Footer from '../partials/footer';
import Header from '../partials/header';
import Sidebar from '../partials/sidebar';
import Login from '../parts/user/login';
import Meta from '../parts/meta';

import styles from './layout.module.scss';

// eslint-disable-next-line one-var
const Layout = ({
	children, meta
}) => (
	<Fragment>
		<Meta {...meta} />
		<Header>
			<Login />
		</Header>
		<main className={styles.main}>
			<Sidebar className={styles.sidebar} />
			{children}
		</main>

		<Footer />
		<Head>
			<script src="https://apis.google.com/js/client:platform.js"></script>
		</Head>
	</Fragment>
);

export default Layout;
