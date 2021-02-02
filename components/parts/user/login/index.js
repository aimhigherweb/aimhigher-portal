import { Fragment } from 'react';

import styles from './login.module.scss';

const Login = ({
	login, loggedIn, user, logout
}) => {
	if (loggedIn) {
		return (
			<Fragment>
				<span className={styles.user}>Logged in as {user}</span>
				<button className={styles.button} onClick={logout}>
					Log out
				</button>
			</Fragment>
		);
	}

	return (
		<button className={styles.button} onClick={login}>
			Login
		</button>
	);
};

export default Login;
