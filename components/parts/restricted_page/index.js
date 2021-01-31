import { Fragment, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../../../pages/_app';

import checkAccess from '../../../utils/auth/checkAccess';

const RestrictedPage = ({
	access_roles, children
}) => {
	const router = useRouter(),
		{ user, loggedIn, login } = useContext(UserContext),
		user_roles = user?.app_metadata?.roles,
		authorised = checkAccess(user_roles, access_roles),
		loading = !user_roles;

	useEffect(() => {
		if (!loading) {
			if (!loggedIn) {
				router.push(`/login`);
			} else if (!authorised) {
				router.push(`/403`);
			}
		}
	});

	return (
		<Fragment>
			{loading && <p>Loading</p>}
			{(authorised && !loading)
				&& <Fragment>{children}</Fragment>
			}
		</Fragment>
	);
};

export default RestrictedPage;
