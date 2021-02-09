import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';

const Clients = () => {
	const accessRoles = [];

	return (
		<Layout>
			<RestrictedPage {...{ accessRoles }}>
				<p>Clients</p>
			</RestrictedPage>
		</Layout>
	);
};

export default Clients;
