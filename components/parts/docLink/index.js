import { useState, useEffect } from 'react';
import Link from 'next/link';

const DocLink = ({ section, slug, children }) => {
	const path = [slug]

	if(section?.[0]) {
		path.unshift(section[0].slug)

		if(section[0]?.parent) {
			path.unshift(section[0].parent.slug)
		}
	}

	return (
		<Link href={`/docs/${path.join(`/`)}`}>
			<a>{children}</a>
		</Link>
	);
};

export default DocLink;
