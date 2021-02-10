import {
	Fragment, useContext
} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from '../partials/footer';
import Header from '../partials/header';
import Login from '../parts/user/login';
import Sidebar from "../dashboard/sidebar";

import { UserContext } from '../../pages/_app';

import styles from './layout.module.scss';

// eslint-disable-next-line one-var
const Layout = ({
	children, meta, site
}) => {
	const {
		user, loggedIn, login, logout
	} = useContext(UserContext);
	return (
		<Fragment>
			<Head>
				<script src="https://apis.google.com/js/client:platform.js"></script>
			</Head>
			<Meta {...{ ...meta, ...site }} />
			<Header>
				<Login {...{
					login,
					logout,
					loggedIn,
					user: user?.user_metadata.full_name
				}} />
			</Header>

			<main className={styles.main}>
				<Sidebar {...{ user, loggedIn }} />
				<div className={styles.content}>
					{children}
				</div>
			</main>

			<Footer />
			<div id="login-modal"></div>
		</Fragment>
	);
};

// eslint-disable-next-line one-var
const Meta = ({
	metaDesc, metaTitle, slug
}) => {
	const title = `AimHigher Web Client Portal`;
	const description = `Client Portal for AimHigher Web Clients`;
	const siteUrl = `https://portal.aimhigherweb.dev`;
	const path = slug || ``;
	const page_title = metaTitle || title;
	const page_desc = metaDesc || description;

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
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<meta name="theme-color" content="#007cbb" />
			<link rel="mask-icon" href="/favicon.png" color="#007cbb" />
		</Head>
	);
};

export default Layout;
