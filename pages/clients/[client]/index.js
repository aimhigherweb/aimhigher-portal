import { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import { UserContext } from '../../_app';
import RestrictedPage from '../../../components/parts/restricted_page';
// TODO: Replace with actual data from CMS
import clientData from '../../../_data/templates/client';

const ClientProfile = () => {
	const router = useRouter(),
		{ client } = router.query,
		access_roles = [`aimhigher`],
		{ user, loggedIn, login } = useContext(UserContext),
		authData = {
			access_roles,
			user_roles: user?.app_metadata?.roles,
			loggedIn,
			login,
			router
		};

	return (
		<Layout>
			<RestrictedPage {...authData}>
				<h1>{clientData.name}</h1>
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
