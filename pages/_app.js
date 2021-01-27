import { useEffect, useState, createContext } from 'react';
import netlifyAuth from '../lib/netlifyAuth';

// import '../styles/global.scss';
export const UserContext = createContext(null);

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
		<UserContext.Provider value={{
			user: currentUser, loggedIn, login, logout
		}}>
			<Component {...pageProps} />
		</UserContext.Provider>
	);
};

export default App;
