import {gql} from '@apollo/client'

import fetchAPI from '../api';

export const fetchClients = ({ queryKey }) => {
	const [key, { clients }] = queryKey,
		path = `clients`,
		params = [
			[`token`, process.env.NEXT_PUBLIC_STRAPI_TOKEN],
		];

	clients.forEach((client) => {
		params.push([`slug`, client]);
	});

	return fetchAPI({ params, path });
};

export const GET_CLIENTS = gql`
	query {
		clients {
			name
			slug
		}
	}
`

export const FILTER_CLIENTS = gql`
	query FilterClients($clients: [String]) {
		clients(
			where: {
				slug_in: $clients
			}
		) {
			name
			slug
			websites {
				domain
				projects {
					title
					slug
				}
			}
		}
	}
`