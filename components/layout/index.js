import {
	Fragment
} from 'react';

import styles from './layout.module.scss';

// eslint-disable-next-line one-var
const Layout = ({
	children, meta, site
}) => (
	<Fragment>
		<main className={styles.main}>
			{children}
		</main>

		<Footer />
		<div id="login-modal"></div>
	</Fragment>
);

export default Layout;
