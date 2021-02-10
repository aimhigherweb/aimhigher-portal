import { useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import Layout from '../../components/layout';

import {
	Form, Input, Label, Button, Checkbox, Legend
} from '../../lib/parts/forms';

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
				: <Form onSubmit={(e) => {
					e.preventDefault();
					const form = e.target;
					const { email, password, remember } = form.elements;

					login(email, password, remember, loginSuccess);
				}}>
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" name="email" />
					<Label htmlFor="password">Password</Label>
					<Input id="password" type="password" name="password" />
					<Checkbox id="remember" name="remember">Remember Me</Checkbox>
					<Button>Submit</Button>
				</Form>
			}
		</Layout>
	);
};

export default LoginPage;
