import { useContext, Fragment } from 'react';
import { useQuery } from 'react-query';

import { UserContext } from '../_app';
import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';
import Dashboard from '../../components/dashboard';
import Nav from '../../components/dashboard/nav'

import { fetchClients } from '../../utils/cms/client/index';

import styles from './dashboard.module.scss'

// eslint-disable-next-line one-var
const ClientProfile = () => {
	const { user } = useContext(UserContext),
		access_roles = user?.app_metadata?.roles.filter((role) => role !== `admin`) || [],
		clients = useQuery([
			`docs`,
			{
				clients: access_roles
			}
		], fetchClients);

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				{clients.status == 'loading' && <p>Loading Dashboard</p>}
				{clients?.data?.map(client => (
					<Dashboard key={client.slug} {...client} />
				))}		
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
