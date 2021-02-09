import { Fragment } from 'react';
import {useQuery} from '@apollo/client'

import DocLink from '../../parts/docLink';
import ClientDashboard from '../../dashboard/client'

import {FILTER_DOCS} from '../../../utils/cms/docs/index'

import styles from './dashboard.module.scss'

const Dashboard = ({clients = []}) => {
	const options = {
		variables: {
			clients: clients.map(client => client.slug)
		},
	},
	{loading, error, data} = useQuery(FILTER_DOCS, options);

	return (
		<div className={styles.dashboard} style={{'--grid_rows': clients.length}}>
			{clients.map(client => (
				<ClientDashboard key={client.slug} {...client} />
			))}
			<div className={styles.docs}>
				{data?.docs
					&& 
						<Fragment>
							<h3>Docs</h3>
							<ul>
								{data?.docs?.map((doc) => (
									<li key={doc.slug}>
										<DocLink {...doc}>
											{doc.title}
										</DocLink>
									</li>
								))}
							</ul>
						</Fragment>
				}
			</div>
		</div>
	)
};

export default Dashboard;
