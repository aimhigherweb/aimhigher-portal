import { Fragment } from 'react';

import NetlifyStatus from '../netlify';
import Analytics from '../analytics';

import styles from './website.module.scss';

const Website = ({ domain, netlify_site, colours }) => (
	<section className={styles.website} style={{ '--heading_underline': colours?.[0]?.hex }}>
		<h3 className={styles.domain}>{domain}</h3>
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
