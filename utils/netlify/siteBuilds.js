import NetlifyAPI from 'netlify';

const client = new NetlifyAPI(process.env.NEXT_PUBLIC_NETLIFY_ACCESS_TOKEN);

export const fetchSites = () => client.listSites().then((res) => res);

export const siteBuilds = ({ queryKey }) => {
	const [key, { site_id, per_page = 1 }] = queryKey;

	return client.listSiteBuilds({
		site_id,
		per_page
	});
};
