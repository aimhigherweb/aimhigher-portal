import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';

import Footer from '../partials/footer';
import Header from '../partials/header';
import netlifyAuth from '../../lib/netlifyAuth';

import styles from './layout.module.scss';

const Layout = ({
		children, meta, site
	}) => {
		const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated),
			[currentUser, setUser] = useState(null),
			login = () => {
				netlifyAuth.authenticate((user) => {
					setLoggedIn(!!user);
					setUser(user);
					netlifyAuth.closeModal();
				});
			},
			logout = () => {
				netlifyAuth.signout(() => {
					setLoggedIn(false);
					setUser(null);
				});
			};

		useEffect(() => {
			netlifyAuth.initialize((user) => {
				setLoggedIn(!!user);
			});
		}, [loggedIn]);

		console.log({ loggedIn });

		return (
			<Fragment>
				{/* <Meta {...{ ...meta, ...site }} /> */}
				<Header />
				<button onClick={login}>Log in here</button>
				<main>
					{children}
				</main>
				<Footer />
			</Fragment>
		);
	},

	Meta = ({
		metaDesc, metaTitle, title, description, url, favicon, slug, opengraphImage
	}) => {
		const path = slug || ``,
			page_title = metaTitle || title,
			page_desc = metaDesc || description,
			siteUrl = url;

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

				<link rel="shortcut icon" href={favicon.sourceUrl} />
				<link rel="icon" sizes="192x192" href={favicon.sourceUrl} />
				<link rel="apple-touch-icon" href={favicon.sourceUrl} />
				<meta name="theme-color" content="#007cbb" />
				<link rel="mask-icon" href={favicon.sourceUrl} color="#007cbb" />

				{/* Facebook */}
				<meta property="og:url" content={`${siteUrl}${path}`} />
				<meta property="og:title" content={page_title} />
				<meta property="og:description" content={page_desc} />
				<meta property="og:type" content="website" />
				{opengraphImage && (
					<meta
						property="og:image"
						content={opengraphImage.sourceUrl}
					/>
				)}

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
		);
	};

export default Layout;
