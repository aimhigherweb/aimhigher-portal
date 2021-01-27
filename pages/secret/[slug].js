import { useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { UserContext } from '../_app';

const MyContext = createContext(null),

	DocPage = ({ params }) => {
		const router = useRouter(),
			{ slug } = router.query,
			access_roles = [`aimhigher`],
			{ user, loggedIn } = useContext(UserContext),
			authorised = access_roles.some((role) => user?.app_metadata?.roles?.includes(role));

		return (
			<Layout>
				{authorised
					? <h2>Secret Document</h2>
					: <h2>Sorry, you don't have access to view this page</h2>
				}
			</Layout>
		);
	};

export default DocPage;
