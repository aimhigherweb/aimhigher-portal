import { useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { UserContext } from '../_app';

const DocPage = () => {
	const router = useRouter(),
		{ params } = router.query,
		location = params,
		access_roles = [`aimhigher`],
		{ user, loggedIn, login } = useContext(UserContext),
		authorised = access_roles.some((role) => user?.app_metadata?.roles?.includes(role)) || user?.app_metadata?.roles?.includes(`admin`),
		slug = location?.pop(),
		category = location?.shift(),
		subcategory = location?.shift();

	return (
		<Layout>
			{authorised
				? <h2>Secret Document</h2>
				: <h2>Sorry, you don't have access to view this page</h2>
			}
			{(!loggedIn && !authorised) && <button onClick={login}>Login to view document</button>}
		</Layout>
	);
};

export default DocPage;
