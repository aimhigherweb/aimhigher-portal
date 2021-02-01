import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';

const ClientProfile = () => {
	const router = useRouter(),
		{ client } = router.query,
		access_roles = [`aimhigher`];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				{/* <h1>{clientData.name}</h1> */}
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
