import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import SignupForm from '../../components/parts/user/signup';

import Layout from '../../components/layout';

const Signup = () => {
	const { name, loggedIn } = useContext(UserContext);
	const router = useRouter();

	useEffect(() => {
		if (loggedIn) {
			// router.push(`/dashboard`);
			console.log(`Logged in, redirecting to Dashboard`);
		}
	}, [loggedIn]);

	return (
		<Layout>
			<SignupForm />
		</Layout>
	);
};

export default Signup;
