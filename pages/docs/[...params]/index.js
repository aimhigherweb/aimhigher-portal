import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';
import Doc from '../../../components/partials/doc';

import { fetchDoc } from '../../../utils/cms/docs/index';

const DocPage = () => {
	const router = useRouter(),
		{ params } = router.query,
		location = params,
		access_roles = [`aimhigher`],
		slug = location?.pop(),
		category = location?.shift(),
		subcategory = location?.shift();

	return (
		<Layout>
			{slug && <Doc {...{ slug }} />}
		</Layout>
	);
};

export default DocPage;
