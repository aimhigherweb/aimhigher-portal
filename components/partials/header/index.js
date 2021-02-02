import Logo from '../../../img/logo.svg';

import styles from './header.module.scss';

const Header = ({ children }) => (
	<header className={styles.header}>
		<Logo className={styles.logo} />
		<p className={styles.title}>Client Portal</p>
		<nav className={styles.user}>
			{children}
		</nav>
	</header>
);

export default Header;
