import { Fragment, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../../../pages/_app';

import checkAccess from '../../../utils/auth/checkAccess';

const RestrictedPage = ({
	accessRoles = [], children
}) => {
	const router = useRouter(),
		{ accessRoles: user_roles, loggedIn, login } = useContext(UserContext),
		authorised = checkAccess(user_roles, accessRoles),
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

	if(loading) return <p>Loading</p>

	return <Fragment>{children}</Fragment>
};

export default RestrictedPage;
