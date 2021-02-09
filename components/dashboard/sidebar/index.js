import Nav from '../clientNav';

import styles from './sidebar.module.scss';

const Sidebar = ({ user, loggedIn }) =>
// console.log(user, loggedIn);

	 (
		<aside className={styles.sidebar}>
			{loggedIn && <Nav className={styles.nav} />}
		</aside>
	);
export default Sidebar;
