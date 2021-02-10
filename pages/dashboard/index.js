import { Fragment, useContext } from 'react';

import Layout from '../../components/layout';

import GraphQLFetch from '../../components/parts/fetchData';
import RestrictedPage from '../../components/parts/restricted_page';
import Dashboard from '../../components/partials/dashboard';

import { UserContext } from '../_app';

import { FILTER_CLIENTS } from '../../utils/cms/client/index';

const UserDashboard = () => {
	const { roles } = useContext(UserContext);
	const query = {
		QUERY: FILTER_CLIENTS,
		options: {
			variables: {
				clients: roles
			}
		},
	};

	return (
		<Layout>
			<RestrictedPage>
				<GraphQLFetch {...query}>
					<Dashboard />
				</GraphQLFetch>
			</RestrictedPage>
		</Layout>
	);
};

export default UserDashboard;
