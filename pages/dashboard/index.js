import { useRouter } from 'next/router';
import { QueryClient,	QueryClientProvider } from 'react-query';

import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';
import Dashboard from '../../components/dashboard';

const queryClient = new QueryClient();

// eslint-disable-next-line one-var
const ClientProfile = () => {
	const access_roles = [`aimhigher`];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				{/* <Dashboard {...clientData} /> */}
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
