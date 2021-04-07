import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Logo from '../lib/img/logo.svg';

import { UserContext } from './_app';

import styles from '../styles/pages/index.module.scss';

const IndexPage = () => {
	const router = useRouter();
	const { loggedIn } = useContext(UserContext);

	useEffect(() => {
		if (loggedIn) {
			router.push(`/dashboard`);
		}
		router.push(`/login`);
	}, [loggedIn]);

	return (
		<div className={styles.landing}>
			<Logo className={styles.logo} />
			<h1>Client Portal</h1>
			<a className={styles.cta} href="/login">Login</a>
		</div>
	);
};

export default IndexPage;
