import Head from 'next/head';

const Meta = ({
	metaDesc, metaTitle, slug
}) => {
	const title = `AimHigher Client Portal`;
	const description = `Client portal for AimHigher Web clients`;
	const path = slug || ``;
	const page_title = metaTitle || title;
	const page_desc = metaDesc || description;
	const siteUrl = process.env.NEXT_PUBLIC_PORTAL_URL;

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no, maximum-scale=1" />
			<title>{page_title}</title>
			<meta name="description" content={page_desc} />
			<meta name="author" content={page_title} />
			<link rel="canonical" href={`${siteUrl}${path}`} />
			<base href="/" />

			<link rel="shortcut icon" href="/favicon.png" />
			<link rel="icon" sizes="192x192" href="/favicon.png" />
			<link rel="apple-touch-icon" href="/favicon.png" />
			<meta name="theme-color" content="#007cbb" />
			<link rel="mask-icon" href="/favicon.png" color="#007cbb" />

		</Head>
	);
};

export default Meta;
