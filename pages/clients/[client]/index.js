import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';

const ClientProfile = () => {
	const router = useRouter(),
		{ client } = router.query,
		accessRoles = [`aimhigher`];

	return (
		<Layout>
			<RestrictedPage {...{ accessRoles }}>
				{/* <h1>{clientData.name}</h1> */}
			</RestrictedPage>
		</Layout>
	);
};

export default ClientProfile;
