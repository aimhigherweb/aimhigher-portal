import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';
// TODO: Replace with actual data from CMS
import clientData from '../../../_data/templates/client';

const ClientProfile = () => {
	const router = useRouter(),
		{ client } = router.query,
		access_roles = [`aimhigher`];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				<h1>{clientData.name}</h1>
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
