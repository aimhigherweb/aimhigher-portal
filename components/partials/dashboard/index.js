import { Fragment } from 'react';

import DocLink from '../../parts/docLink';
import ClientDashboard from '../../dashboard/client'

import styles from './dashboard.module.scss'

const Dashboard = ({data = []}) => {
	const clients = data.map(client => client.slug),
	docs = []

	data.forEach(client => {
		client.docs.forEach(doc => {
			if(!docs.some(({slug}) => slug === doc.slug)) {
				docs.push(doc) 
			}
		})
	})

	return (
		<div className={styles.dashboard} style={{'--grid_rows': data.length}}>
			{data.map(client => (
				<ClientDashboard key={client.slug} {...client} />
			))}
			<div className={styles.docs}>
				{docs
					&& 
						<Fragment>
							<h3>Docs</h3>
							<ul>
								{docs.map((doc) => (
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
