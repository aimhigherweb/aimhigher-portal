import { useState, Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
	Form, Input, Label, Button, Hint, Password
} from '../../lib/parts/forms';

import Layout from '../../components/layout';

import { recoverUser, updateUser } from '../../utils/auth/netlifyIdentity';

// import styles from './register.module.scss';

const PasswordReset = () => {
	const [submitted, setSubmit] = useState(false);
	const [authorised, setAuthorised] = useState(false);
	const submitRequest = (e) => {
		e.preventDefault();

		const form = e.target;
		const { email, name, password } = form.elements;

		requestReset(email.value);

		setSubmit(!submitted);
	};

	useEffect(() => {
		if (
			typeof window !== `undefined`
			&& window.location.hash.match(/\#recovery_token/)
		) {
			const params = {};
			window.location.hash.replace(/^\#/, ``).split(`&`).forEach((i) => {
				const values = i.split(`=`);

				params[values[0]] = values[1];
			});

			if (params.recovery_token) {
				recoverUser(params.recovery_token);
				setAuthorised(true);
			}
		}
	}, []);

	return (
		<Layout>
			<Form onSubmit={(e) => submitRequest(e)}>
				{authorised
					&& <Form onSubmit={(e) => signupSubmit(e)} {...attr}>
						<Label htmlFor="name">Name</Label>
						<Input
							type="text"
							id="name"
							name="name"
							required
						/>
						<Label htmlFor="email">Email address</Label>
						<Input
							type="email"
							id="email"
							name="email"
							placeholder="hello@domain.com"
							required
							inputMode="email"
						/>
						<Password
							autoComplete="on"
							validate={true}
						>
				Choose Password
							<Hint>Must contain
								<ul className="requirements">
									<li>At least 8 characters</li>
									<li>At least 1 uppercase letter</li>
									<li>At least 1 number</li>
								</ul>
							</Hint>
						</Password>
						<Button type="submit">Register</Button>
					</Form>
				}
			</Form>
		</Layout>
	);
};

export default PasswordReset;
