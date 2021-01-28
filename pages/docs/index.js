import { useContext } from 'react';
import Layout from '../../components/layout';
import { UserContext } from '../_app';
import RestrictedPage from '../../components/parts/restricted_page';

const Docs = () => {
	const { user, loggedIn, login } = useContext(UserContext),
		// TODO: Show docs relevant to logged in client
		authData = {
			access_roles: [],
			user_roles: user?.app_metadata?.roles,
			loggedIn,
			login
		};

	return (
		<Layout>
			<RestrictedPage {...authData}>
				<p>Docs</p>
			</RestrictedPage>
		</Layout>
	);
};

export default Docs;
