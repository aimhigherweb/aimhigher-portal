import { useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import Layout from '../../components/layout';

import {
	Form, Input, Label, Button, Checkbox, Legend
} from '../../lib/parts/forms';
import Login from '../../components/parts/user/loginForm';

import { login, logout } from '../../utils/auth/netlifyIdentity';

const LoginPage = () => {
	const router = useRouter();
	const { name, loggedIn } = useContext(UserContext);
	const loginSuccess = () => {
		router.push(`/dashboard`);
	};
	const logoutSuccess = () => {
		router.reload();
	};

	return (
		<Layout>
			{loggedIn
				? <div>
					<p>Logged in as {name}</p>
					<Button onClick={() => logout(logoutSuccess)}>Log Out</Button>
				</div>
				: <Login {...{ loginSuccess }} />
			}
		</Layout>
	);
};

export default LoginPage;
