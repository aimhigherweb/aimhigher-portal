import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import {
	Form, Input, Label, Button, Checkbox
} from '../../lib/parts/forms';

import { login, logout } from '../../utils/auth/netlifyIdentity';

const LoginPage = () => {
	const router = useRouter();
	const { name, roles, loggedIn } = useContext(UserContext);
	const loginSuccess = () => {
		router.push(`/dashboard`);
	};
	const logoutSuccess = () => {
		router.reload();
	};

	return (
		<div>
			<h1>Login</h1>
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
		</div>
	);
};

const LoginForm = () => (
	<Form onSubmit={(e) => {
		e.preventDefault();
		const form = e.target;
		const { email, password } = form.elements;

		login(email, password);
	}}>
		<Label htmlFor="email">Email</Label>
		<Input id="email" type="email" name="email" />
		<Label htmlFor="password">Password</Label>
		<Input id="password" type="password" name="password" />
		<Button>Submit</Button>
	</Form>
);

export default LoginPage;
