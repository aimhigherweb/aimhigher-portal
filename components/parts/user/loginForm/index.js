import {
	Form, Input, Label, Button, Checkbox, Legend, Password
} from '../../../../lib/parts/forms';

import { login } from '../../../../utils/auth/netlifyIdentity';

const Login = ({ loginSuccess }) => {
	const loginSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const { email, password, remember } = form.elements;

		login(email, password, remember, loginSuccess);
	};
	return (
		<Form onSubmit={(e) => loginSubmit(e)}>
			<Label htmlFor="email">Email Address</Label>
			<Input
				id="email"
				type="email"
				name="email"
				autoCapitalize="none"
				autoCorrect="off"
				spellCheck="false"
				required
				inputMode="email"
			/>

			<Password>
				Password
			</Password>

			<Checkbox id="remember" name="remember">Remember Me</Checkbox>

			<Button>Submit</Button>
		</Form>
	);
};

export default Login;
