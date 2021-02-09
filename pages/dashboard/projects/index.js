import { useContext, Fragment } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import {useQuery as gqlQuery} from '@apollo/client'

import { UserContext } from '../../_app';
import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';

import { fetchClients, FILTER_CLIENTS } from '../../../utils/cms/client/index';
import {fetchProjects, FILTER_PROJECTS} from '../../../utils/cms/projects/index'

// eslint-disable-next-line one-var
const ClientProjects = () => {
	const { user } = useContext(UserContext),
		access_roles = user?.app_metadata?.roles.filter((role) => role !== `admin`) || [],
		options = {
			variables: {
				clients: access_roles
			},
		},
		{loading, error, data} = gqlQuery(FILTER_CLIENTS, options);


	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				{loading && <p>Loading</p>}
				{data?.clients &&
					<ul>{data.clients.map(client => (
						<li>
							{client.name}
							<ul>
							{client?.websites.map(site => (
								<li>
									{site.domain}
									<ul>
									{site?.projects.map(project => (
										<li>
											<Link href={`/clients/${client.slug}/projects/${project.slug}`}>
												<a>{project.title}</a>
											</Link>
										</li>
									))}
									</ul>
								</li>
							))}
							</ul>
						</li>
					))}</ul>
				}	
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProjects;
