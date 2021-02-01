import { useState, useEffect, Fragment } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

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
		[doc, setDoc] = useState(null);

	useEffect(() => {
		if (data.status !== `loading`) {
			if (data.data?.length === 0) {
				router.push(`/404`);
			}

			setDoc(data.data?.[0]);
		}
	}, [data]);

	return (
		<article>
			{doc
				&& <Fragment>
					<h1>{doc.title}</h1>
					<Markdown markdown={doc.content} />
				</Fragment>
			}
		</article>
	);
};

export default Doc;
