import { useContext, Fragment } from 'react';
import {useQuery} from '@apollo/client'

import { UserContext } from '../_app';
import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';
import Dashboard from '../../components/partials/dashboard';

import { FILTER_CLIENTS } from '../../utils/cms/client/index';

// eslint-disable-next-line one-var
const ClientProfile = () => {
	const { user } = useContext(UserContext),
		access_roles = user?.app_metadata?.roles.filter((role) => role !== `admin`) || [],
		options = {
			variables: {
				clients: access_roles
			},
		},
		{loading, error, data} = useQuery(FILTER_CLIENTS, options);

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				{loading
					? <p>Loading Dashboard</p>
					: <Dashboard {...data} />	
				}
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
