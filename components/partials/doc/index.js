import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import {useQuery} from '@apollo/client'

import RestrictedPage from '../../parts/restricted_page';
import Markdown from '../../parts/markdown';

import {GET_DOC} from '../../../utils/cms/docs/index'

import styles from './doc.module.scss'

const Doc = ({ slug }) => {
	const [accessRoles, setAccess] = useState([]),
	[doc, setDoc] = useState(undefined),
	router = useRouter(),
	options = {
		variables: {
			slug: slug
		},
	},
	{loading, error, data} = useQuery(GET_DOC, options),
	access_roles = []

	console.log({loading, error, data})

	useEffect(() => {
		if (!loading && data) {
			if (data.docs?.length === 0) {
				router.push(`/404`);
			}
			
			setAccess(data.docs?.[0]?.clients.map((client) => client.slug) || []);
			setDoc(data?.docs?.[0])
		}
	}, [loading]);

	return (
		<RestrictedPage {...{ access_roles }}>
			<article className={styles.doc}>
				{doc
				&& <Fragment>
					<h1 className={styles.title}>{doc.title}</h1>
					<Markdown markdown={doc.content} />
				</Fragment>
				}
			</article>
		</RestrictedPage>
	);
};

export default Doc;
