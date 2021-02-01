import { Fragment } from 'react';
import { useQuery } from 'react-query';
import { format } from 'date-fns';

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

	console.log(builds?.data?.[0]);
	console.log(builds?.data?.[0].created_at);

	return (
		<div>
			<h3>Build Status</h3>
			{builds.status === `loading`
				? <p>Loading Data</p>
				:		<ul>
					{builds.data.map((build) => (
						<li>
							<dl>
								<dt>Status</dt>
								<dd>
									{build.done ? `Finished` : `In Progress`}
								</dd>
								{build.error
									&& <Fragment>
										<dt>Error</dt>
										<dd>{build.error}</dd>
									</Fragment>
								}
								<dt>Date</dt>
								<dd>
									{/* {format(build.created_at, `DD-MMM`)} */}
								</dd>
							</dl>
						</li>
					))}
				</ul>
			}
		</div>
	);
};

export default NetlifyStatus;
