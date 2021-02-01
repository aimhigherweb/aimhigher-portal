import { useRouter } from 'next/router';
import Layout from '../../../../../../components/layout';
import RestrictedPage from '../../../../../../components/parts/restricted_page';

const ProjectProposal = () => {
	const router = useRouter(),
		{ client } = router.query,
		access_roles = [client];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				{/* <h1>{projectData.name}</h1> */}

			</RestrictedPage>
		</Layout>
	);
};

export default ProjectProposal;
