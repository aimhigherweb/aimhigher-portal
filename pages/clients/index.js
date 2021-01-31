import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';

const Clients = () => {
	const access_roles = [];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				<p>Clients</p>
			</RestrictedPage>
		</Layout>
	);
};

export default Clients;
