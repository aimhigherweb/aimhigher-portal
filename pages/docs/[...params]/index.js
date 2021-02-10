import { useRouter } from 'next/router';

import GraphQLFetch, { CMSDataContext } from '../../../components/parts/fetchData';

import Layout from '../../../components/layout';
import RestrictedPage from '../../../components/parts/restricted_page';
import Doc from '../../../components/partials/doc';

import { GET_DOC } from '../../../utils/cms/docs/index';

const DocPage = () => {
	const router = useRouter();
	const { params } = router.query;
	const slug = params?.pop();
	const query = {
		QUERY: GET_DOC,
		options: {
			variables: {
				slug
			}
		},
	};

	return (
		<Layout>
			<GraphQLFetch {...query}>
				<CMSDataContext.Consumer>
					{({ docs }) => {
						const permissions = docs?.[0]?.clients?.map((client) => client.slug) || [];

						return (
							<RestrictedPage {...{ permissions }}>
								<Doc {...docs?.[0]} />
							</RestrictedPage>
						);
					}}
				</CMSDataContext.Consumer>
			</GraphQLFetch>
		</Layout>
	);
};

export default DocPage;
