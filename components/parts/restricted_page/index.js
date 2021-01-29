import {Fragment, useEffect} from 'react'
import { useRouter } from 'next/router';

const RestrictedPage = ({access_roles, user_roles, loggedIn, login, children, router}) => {
	const checkAccess = (roles) => {
		return access_roles.some((role) => roles?.includes(role)) 
		|| roles?.includes(`admin`) 
		|| access_roles.includes('public')
	},
	authorised = checkAccess(user_roles),
	loading = user_roles ? false : true
	

	useEffect(() => {
		if(!loading) {
			if(!loggedIn) {
				router.push('/login')
			}
			else if(!authorised) {
				router.push('/403')
			}
		}
	})


	return (
		<Fragment>
		{loading && <p>Loading</p>}
		{(authorised && !loading)
				&& <Fragment>{children}</Fragment>
			}
	</Fragment>
	)
}

export default RestrictedPage