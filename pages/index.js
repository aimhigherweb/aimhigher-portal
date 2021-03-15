import Logo from '../lib/img/logo.svg';

import styles from '../styles/pages/index.module.scss';

const IndexPage = () => (
	<div className={styles.landing}>
		<Logo className={styles.logo} />
		<h1>Client Portal</h1>
		<a className={styles.cta} href="/login">Login</a>
	</div>
);

export default IndexPage;
