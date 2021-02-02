import { Fragment } from 'react';

import Website from './website';

const Dashboard = ({
	name, slug, websites, id, docs, testimonials
}) => (
	<section>
		<h2>{name}</h2>
		{websites.map((site) => (
			<Website key={site.domain} {...site} />
		))}
	</section>
);

export default Dashboard;
