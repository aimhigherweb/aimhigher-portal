import { Fragment } from 'react';

import Button from '../../../../lib/parts/forms/button'

import styles from './login.module.scss';

const Login = ({
	login, loggedIn, user, logout
}) => {
	if (loggedIn) {
		return (
			<Fragment>
				<span className={styles.user}>Logged in as {user}</span>
				<Button className={styles.button} onClick={logout}>
					Log out
				</Button>
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
