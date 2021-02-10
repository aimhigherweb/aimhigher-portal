import { Fragment, useContext } from 'react';
import { useQuery } from '@apollo/client';

import DocLink from '../../parts/docLink';
import ClientDashboard from '../../dashboard/client';

import { CMSDataContext } from '../../parts/fetchData';

import { FILTER_DOCS } from '../../../utils/cms/docs/index';

import styles from './dashboard.module.scss';

const Dashboard = () => {
	const { clients } = useContext(CMSDataContext);

	console.log(clients);
	return (
		<div className={styles.dashboard} style={{ '--grid_rows': `clients.length` }}>
			{clients.map((client) => (
				<ClientDashboard key={client.slug} {...client} />
			))}
			{/* <div className={styles.docs}>
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
				</div> */}
		</div>
	);
};

export default Dashboard;
