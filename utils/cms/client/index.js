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

// export const fetchDoc = ({ queryKey }) => {
// 	const [key, { id, slug }] = queryKey,
// 		path = `docs${id ? `/${id}` : ``}`,
// 		params = {
// 			token: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
// 			slug
// 		};

// 	return fetchAPI({ params, path });
// };
