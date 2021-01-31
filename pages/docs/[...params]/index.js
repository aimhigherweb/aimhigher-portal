import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';

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
			<RestrictedPage {...{ access_roles }}>
				<p>Secret Document</p>
			</RestrictedPage>
		</Layout>
	);
};

export default DocPage;
