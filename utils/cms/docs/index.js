import fetchAPI from '../api';

export const fetchDocs = () => {
	const path = `docs`,
		params = {
			token: process.env.NEXT_PUBLIC_STRAPI_TOKEN
		};

	return fetchAPI({ params, path });
};

export const fetchDoc = ({ queryKey }) => {
	const [key, { id, slug }] = queryKey,
		path = `docs${id ? `/${id}` : ``}`,
		params = {
			token: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
			slug
		};

	return fetchAPI({ params, path });
};
