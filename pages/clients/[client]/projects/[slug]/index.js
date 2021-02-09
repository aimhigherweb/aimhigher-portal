import { useRouter } from 'next/router';
import Layout from '../../../../../components/layout';
import RestrictedPage from '../../../../../components/parts/restricted_page';

const ClientProject = () => {
	const router = useRouter(),
		{ client, slug } = router.query,
		accessRoles = [`aimhigher`];

	return (
		<Layout>
			<RestrictedPage {...{ accessRoles }}>
				{/* <h1>{projectData.name}</h1> */}

			</RestrictedPage>
		</Layout>
	);
};

export default ClientProject;
