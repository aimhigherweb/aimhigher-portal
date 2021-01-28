import {Fragment} from 'react'

const RestrictedPage = ({access_roles, user_roles, loggedIn, login, children}) => {
	const authorised = access_roles.some((role) => user_roles?.includes(role)) || user_roles?.includes(`admin`) || access_roles.includes('public')


	return (
		<Fragment>
		{authorised
				? <Fragment>{children}</Fragment>
				: <NotAuthorised />
			}
			{(!loggedIn && !authorised) && <LoginButton {...{login}} />}
	</Fragment>
	)
}

const NotAuthorised = () => (
<h2>Sorry, you don't have access to view this page</h2>
)

const LoginButton = ({login}) => (
<button onClick={login}>Login to view this page</button>
)

export default RestrictedPage