import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {useQuery} from '@apollo/client'

import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';
import Doc from '../../../components/partials/doc';

import {GET_DOC} from '../../../utils/cms/docs/index'

const DocPage = () => {
	const router = useRouter(),
		{ params } = router.query,
		location = params,
		slug = location?.pop()
		
	return (
		<Layout>
				{slug && <Doc {...{ slug }} />}
		</Layout>
	);
};

export default DocPage;
