import { createContext, useEffect } from 'react';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/router';

import { currentUser, recoverUser } from '../utils/auth/netlifyIdentity';
import cache from '../utils/cms/cache';

import '../lib/styles/global.scss';

export const UserContext = createContext();

const httpLink = createHttpLink({
	uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`
});
const authLink = setContext((_, { headers }) => {
	const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

	return {
		headers: {
			...headers,
			authorization: `Bearer ${token}`
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache
});

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
	const user = currentUser();
	const router = useRouter();
	const userData = {
		loggedIn: user && true,
		name: user?.user_metadata?.full_name,
		roles: user?.app_metadata?.roles || [],
		email: user?.email
	};

	useEffect(() => {
		if (
			typeof window !== `undefined`
			&& window.location.hash.match(/\#recovery_token/)
		) {
			const params = {};
			window.location.hash.replace(/^\#/, ``).split(`&`).forEach((i) => {
				const values = i.split(`=`);

				params[values[0]] = values[1];
			});

			if (params.recovery_token) {
				recoverUser(params.recovery_token);

				if (currentUser()) {
					console.log(currentUser());
				}

				// currentUser().jwt();
				// router.push(`/update`);
			}
		}
	}, []);

	return (
		<UserContext.Provider value={userData}>
			<QueryClientProvider client={queryClient}>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</QueryClientProvider>
		</UserContext.Provider>
	);
};

export default App;
