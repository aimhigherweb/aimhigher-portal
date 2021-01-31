import { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../../components/layout';
import { UserContext } from '../../../_app';
import RestrictedPage from '../../../../components/parts/restricted_page';

const ClientProject = () => {
	const router = useRouter(),
		{ client, slug } = router.query,
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
				<p>Client Project</p>
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProject;
