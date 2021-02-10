import Website from '../website';

import styles from './client.module.scss';

const ClientDashboard = ({
	name, slug, websites = [], id, docs, testimonials
}) => (
	<div className={styles.client}>
		<h2>{name}</h2>
		{websites.map((site) => (
			<Website key={site.domain} {...site} />
		))}
	</div>
);

export default ClientDashboard;
