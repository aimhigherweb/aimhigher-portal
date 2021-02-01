import { useQuery } from 'react-query';
import Link from 'next/link';

import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';
import DocLink from '../../components/parts/docLink';

import { fetchDocs } from '../../utils/cms/docs/index';

const Docs = () => {
	// TODO: Show docs relevant to logged in client
	const docs = useQuery([
			`docs`
		], fetchDocs),
		access_roles = [];

	return (
		<Layout>
			<RestrictedPage {...{ access_roles }}>
				<p>List of Docs</p>
				{docs.status === `loading` && <p>Loading...</p>}
				<ul>
					{docs?.data?.map(({ title, section, slug }) => (
						<li key={slug}>
							<DocLink {...{ slug, section }}>
								{title}
							</DocLink>
						</li>
					))}
				</ul>
			</RestrictedPage>
		</Layout>
	);
};

export default Docs;
