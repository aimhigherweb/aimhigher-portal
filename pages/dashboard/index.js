import { useContext } from 'react';
import Layout from '../../components/layout';
import { UserContext } from '../_app';
import RestrictedPage from '../../components/parts/restricted_page';

const ClientProfile = () => {
	const access_roles = [`aimhigher`],
		{ user, loggedIn, login } = useContext(UserContext),
		authData = {
			access_roles,
			user_roles: user?.app_metadata?.roles,
			loggedIn,
			login
		};

	return (
		<Layout>
			<RestrictedPage {...authData}>
				<p>Client Dashboard</p>
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
