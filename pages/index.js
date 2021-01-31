import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { UserContext } from './_app';

const IndexPage = () => {
	const { user, loggedIn, login } = useContext(UserContext),
		router = useRouter();

	useEffect(() => {
		if (!loggedIn) {
			router.push(`/login`);
		} else {
			router.push(`/dashboard`);
		}
	}, [loggedIn]);

	return (
		<Layout>
			<h1>AimHigher Web Client Portal</h1>
		</Layout>
	);
};

export default IndexPage;
