import {
	Form, Input, Label, Button, Checkbox, Legend, Password
} from '../../../../lib/parts/forms';

const Login = (loginSubmit) => (
	<Form onSubmit={(e) => loginSubmit(e)}>
		<Label htmlFor="email">Email Address</Label>
		<Input
			id="email"
			type="email"
			name="email"
			autocapitalize="none"
			autocorrect="off"
			spellcheck="false"
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

export default Login;
