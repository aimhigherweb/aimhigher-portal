import { useEffect, useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import netlifyAuth from '../utils/auth/netlifyIdentity';

import '../lib/styles/global.scss';

export const UserContext = createContext(null);
const queryClient = new QueryClient();

// eslint-disable-next-line one-var
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

	// console.log(currentUser);

	return (
		<QueryClientProvider client={queryClient}>
			<UserContext.Provider value={{
				user: currentUser, loggedIn, login, logout
			}}>
				<Component {...pageProps} />
			</UserContext.Provider>
		</QueryClientProvider>
	);
};

export default App;
