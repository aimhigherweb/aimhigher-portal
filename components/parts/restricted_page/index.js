import { Fragment, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../../../pages/_app';

import checkAccess from '../../../utils/auth/checkAccess';

const RestrictedPage = ({
	permissions = [], children
}) => {
	const { roles, loggedIn } = useContext(UserContext);
	const router = useRouter();
	const authorised = checkAccess(roles, permissions);

	useEffect(() => {
		if (!loggedIn) {
			router.push(`/login`);
		}

		if (!authorised) {
			router.push(`/403`);
		}
	}, [roles, loggedIn, authorised]);

	return <Fragment>{children}</Fragment>;
};

export default RestrictedPage;
