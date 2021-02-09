import { useEffect, useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'

import netlifyAuth from '../utils/auth/netlifyIdentity';

import '../lib/styles/global.scss';

export const UserContext = createContext(null);
const queryClient = new QueryClient();
const httpLink = createHttpLink({
	uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`
})
const authLink = setContext((_, {headers}) => {
	const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN

	return {
		headers: {
			...headers,
			authorization: `Bearer ${token}`
		}
	}
})
const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

const App = ({ Component, pageProps }) => {
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
			setUser(user);
		});
	}, [loggedIn]);

	return (
		<ApolloProvider client={apolloClient}>
			<QueryClientProvider client={queryClient}>
				<UserContext.Provider value={{
					user: currentUser, loggedIn, login, logout
				}}>
					<Component {...pageProps} />
				</UserContext.Provider>
			</QueryClientProvider>
		</ApolloProvider>
	);
};

export default App;
