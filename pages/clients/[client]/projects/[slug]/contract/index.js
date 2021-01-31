import { useRouter } from 'next/router';
import Layout from '../../../../../../components/layout';
import RestrictedPage from '../../../../../../components/parts/restricted_page';
// TODO: Replace with actual data from CMS
import projectData from '../../../../../../_data/templates/client/project';
import clientData from '../../../../../../_data/templates/client';
import contractData from '../../../../../../_data/templates/client/project/contract';

import processMarkdown from '../../../../../../utils/markdown';

const ProjectContract = () => {
	const router = useRouter(),
		{ client } = router.query,
		access_roles = [projectData.client],
		contract = processMarkdown(contractData.template);

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				<h1>{projectData.name} - Contract</h1>
				<div dangerouslySetInnerHTML={{ __html: contract }} />
			</RestrictedPage>
		</Layout>
	);
};

export default ProjectContract;
