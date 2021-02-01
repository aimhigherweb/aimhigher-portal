import { useRouter } from 'next/router';
import Layout from '../../../../../components/layout';
import RestrictedPage from '../../../../../components/parts/restricted_page';

const ClientProject = () => {
	const router = useRouter(),
		{ client, slug } = router.query,
		access_roles = [`aimhigher`];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				{/* <h1>{projectData.name}</h1> */}

			</RestrictedPage>
		</Layout>
	);
};

export default ClientProject;
