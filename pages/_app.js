import { createContext } from 'react';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { currentUser } from '../utils/auth/netlifyIdentity';
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
	const userData = {
		loggedIn: user && true,
		name: user?.user_metadata?.full_name,
		roles: user?.app_metadata?.roles || [],
	};

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
