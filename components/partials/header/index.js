import Link from 'next/link';
import Logo from '../../../lib/img/logo.svg';

import styles from './header.module.scss';

const Header = ({ children }) => (
	<header className={styles.header}>
		<a href="https://aimhigherweb.design" target="_blank">
			<Logo className={styles.logo} />
		</a>
		<p className={styles.title}>
			<Link href="/">
				<a>Client Portal</a>
			</Link>
		</p>
		<nav className={styles.user}>
			{children}
		</nav>
	</header>
);

export default Header;
