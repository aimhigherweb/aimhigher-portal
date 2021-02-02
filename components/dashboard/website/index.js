import { Fragment } from 'react';

import NetlifyStatus from '../netlify';
import Analytics from '../analytics';

const Website = ({ domain, netlify_site }) => (
	<section>
		<h3>{domain}</h3>
		{netlify_site
			&& <NetlifyStatus
				{...{
					site: netlify_site
				}}
			/>
		}
	</section>
);

export default Website;
