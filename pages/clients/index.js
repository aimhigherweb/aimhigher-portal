import { useContext } from 'react';
import Layout from '../../components/layout';
import { UserContext } from '../_app';
import RestrictedPage from '../../components/parts/restricted_page';

const Clients = () => {
	const { user, loggedIn, login } = useContext(UserContext),
		authData = {
			access_roles: [],
			user_roles: user?.app_metadata?.roles,
			loggedIn,
			login
		};

	return (
		<Layout>
			<RestrictedPage {...authData}>
				<p>Clients</p>
			</RestrictedPage>
		</Layout>
	);
};

export default Clients;
