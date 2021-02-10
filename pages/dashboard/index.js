import { Fragment, useContext } from 'react';

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
		<Fragment>
			<RestrictedPage>
				<h1>Dashboard</h1>
				<GraphQLFetch {...query}>
					<Dashboard />
				</GraphQLFetch>
			</RestrictedPage>
		</Fragment>
	);
};

export default UserDashboard;
