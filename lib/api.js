const API_URL = process.env.STRAPI_URL,

	fetchAPI = async (query, { variables } = {}) => {
		const headers = { 'Content-Type': `application/json` },
			res = await fetch(API_URL, {
				method: `POST`,
				headers,
				body: JSON.stringify({ query, variables })
			}),
			json = await res.json();

		if (json.errors) {
			console.log(json.errors);
			console.log(`error details`, query, variables);
			throw new Error(`Failed to fetch API`);
		}

		return json.data;
	};

export default fetchAPI;
