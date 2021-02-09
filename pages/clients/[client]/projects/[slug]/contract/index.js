import { useRouter } from 'next/router';
import Layout from '../../../../../../components/layout';
import RestrictedPage from '../../../../../../components/parts/restricted_page';

const ProjectContract = () => {
	const router = useRouter(),
		{ client } = router.query,
		accessRoles = [client];
		// contract = processMarkdown(contractData.template);

	return (
		<Layout>
			<RestrictedPage {...{ accessRoles }}>
				{/* <h1>{projectData.name} - Contract</h1> */}
				{/* <div dangerouslySetInnerHTML={{ __html: contract }} /> */}
			</RestrictedPage>
		</Layout>
	);
};

export default ProjectContract;
