import { Fragment } from 'react';

import Website from './website';
import DocLink from '../parts/docLink';

const Dashboard = ({
	name, slug, websites, id, docs, testimonials
}) => (
	<section>
		<h2>{name}</h2>
		{websites.map((site) => (
			<Website key={site.domain} {...site} />
		))}
		{docs
			&& <Fragment>
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
	</section>
);

export default Dashboard;
