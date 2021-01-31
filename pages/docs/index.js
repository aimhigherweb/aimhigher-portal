import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';

const Docs = () => {
	// TODO: Show docs relevant to logged in client
	const access_roles = [];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				<p>Docs</p>
			</RestrictedPage>
		</Layout>
	);
};

export default Docs;
