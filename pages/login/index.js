import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { UserContext } from "../_app";

const LoginPage = () => {
	const { user, loggedIn, login } = useContext(UserContext),
		router = useRouter();

	useEffect(() => {
		if (!loggedIn) {
			login();
		} else {
			router.push(`/dashboard`);
		}
	}, [loggedIn]);

	return (
		<Layout>
			<h1>Login</h1>
		</Layout>
	);
};

export default LoginPage;
