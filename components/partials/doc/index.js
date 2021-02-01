import { useState, useEffect, Fragment } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import RestrictedPage from '../../parts/restricted_page';
import Markdown from '../../parts/markdown';

import { fetchDoc } from '../../../utils/cms/docs/index';

const Doc = ({ slug }) => {
	const router = useRouter(),
	 data = useQuery([
			`section`,
			{
				slug
			}
		], fetchDoc),
		[doc, setDoc] = useState(null),
		[access_roles, setAccess] = useState([]);

	useEffect(() => {
		if (data.status !== `loading`) {
			if (data.data?.length === 0) {
				router.push(`/404`);
			}

			const clients = data.data?.[0]?.clients.map((client) => client.slug);

			setDoc(data.data?.[0]);
			setAccess(clients);
		}
	}, [data]);

	return (
		<RestrictedPage {...{ access_roles }}>
			<article>
				{doc
				&& <Fragment>
					<h1>{doc.title}</h1>
					<Markdown markdown={doc.content} />
				</Fragment>
				}
			</article>
		</RestrictedPage>
	);
};

export default Doc;
