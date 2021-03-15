import { Fragment, useContext } from 'react';
import { useRouter } from 'next/router';

import Button from '../../../../lib/parts/forms/button';

import { UserContext } from '../../../../pages/_app';
import { login, logout } from '../../../../utils/auth/netlifyIdentity';

import styles from './login.module.scss';

const Login = () => {
	const router = useRouter();
	const { name, loggedIn, email } = useContext(UserContext);
	const loginSuccess = () => {
		router.push(`/dashboard`);
	};
	const logoutSuccess = () => {
		router.reload();
	};

	if (!loggedIn) {
		return (
			<a
				className={styles.button}
				href="/login"
			>
				Login
			</a>
		);
	}

	return (
		<Fragment>
			<span className={styles.user}>Logged in as {name} (<em>{email}</em>)</span>
			<Button
				className={styles.button}
				onClick={() => logout(logoutSuccess)}
			>
				Log out
			</Button>
		</Fragment>
	);
};

export default Login;
