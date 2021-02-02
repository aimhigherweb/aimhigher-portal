import { Fragment } from 'react';
import { useQuery } from 'react-query';
import { format, parse } from 'date-fns';

import BuildStatus from '../../parts/buildStatus';

import { siteBuilds } from '../../../utils/netlify/siteBuilds';

// eslint-disable-next-line one-var
const NetlifyStatus = ({ site }) => {
	const builds = useQuery([
		`builds`,
		{
			site_id: site,
			per_page: 1
		}
	], siteBuilds);

	return (
		<div>
			<h4>Build Status</h4>
			{builds.status === `loading`
				? <p>Loading Data</p>
				: <BuildStatus {...builds.data[0]} />
			}
		</div>
	);
};

export default NetlifyStatus;
