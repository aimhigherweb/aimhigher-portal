import { useContext } from 'react';
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider
} from 'react-query';

import Layout from '../../components/layout';
import { UserContext } from '../_app';
import RestrictedPage from '../../components/parts/restricted_page';

import Dashboard from '../../components/dashboard';

const queryClient = new QueryClient();

// eslint-disable-next-line one-var
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
				<QueryClientProvider client={queryClient}>
					<Dashboard />
				</QueryClientProvider>
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
