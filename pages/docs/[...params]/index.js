import { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import { UserContext } from '../../_app';
import RestrictedPage from '../../../components/parts/restricted_page';

const DocPage = () => {
	const router = useRouter(),
		{ params } = router.query,
		location = params,
		access_roles = [`aimhigher`],
		{ user, loggedIn, login } = useContext(UserContext),
		slug = location?.pop(),
		category = location?.shift(),
		subcategory = location?.shift(),
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
				<p>Secret Document</p>
			</RestrictedPage>
		</Layout>
	);
};

export default DocPage;
