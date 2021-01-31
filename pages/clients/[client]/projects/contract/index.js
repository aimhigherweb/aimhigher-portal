import { useRouter } from 'next/router';
import Layout from '../../../../../components/layout';
import RestrictedPage from '../../../../../components/parts/restricted_page';
// TODO: Replace with actual data from CMS
import projectData from '../../../../../_data/templates/client/project';
import clientData from '../../../../../_data/templates/client';
// import contractData from '../../../../../_data/templates/client/project/contract.md';

const ProjectContract = () => {
	const router = useRouter(),
		{ client } = router.query,
		access_roles = [projectData.client];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				<h1>{projectData.name}</h1>

			</RestrictedPage>
		</Layout>
	);
};

export default ProjectContract;
