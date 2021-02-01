import fetchAPI from '../api';

export const fetchSections = (count) => {
	const path = `documentation-sections`,
		params = {
			token: process.env.NEXT_PUBLIC_STRAPI_TOKEN
		};

	return fetchAPI({ params, path });
};

export const fetchSection = ({ queryKey }) => {
	const [key, { id }] = queryKey,
		path = `documentation-sections/${id}`,
		params = {
			token: process.env.NEXT_PUBLIC_STRAPI_TOKEN
		};

	return fetchAPI({ params, path });
};
