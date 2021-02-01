import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Link from 'next/link';

import { fetchSection } from '../../../utils/cms/docs/sections';

const DocLink = ({ section, slug, children }) => {
	const [path, setPath] = useState([]),
		sections = useQuery([
			`section`,
			{
				...section?.[0]
			}
		], fetchSection);

	useEffect(() => {
		if (sections.status !== `loading`) {
			const docPath = [slug];

			if (sections.data.slug) {
				docPath.unshift(sections.data.slug);
			}

			if (sections.data.parent) {
				docPath.unshift(sections.data.parent.slug);
			}

			setPath(docPath);
		}
	}, [sections]);

	return (
		<Link href={`/docs/${path.join(`/`)}`}>
			<a>{children}</a>
		</Link>
	);
};

export default DocLink;
