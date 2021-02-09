import Link from 'next/link';

const DocLink = ({ section, slug, children }) => {
	const path = [slug]

	if(section) {
		path.unshift(section.slug)

		if(section.parent) {
			path.unshift(section.parent.slug)
		}
	}

	return (
		<Link href={`/docs/${path.join(`/`)}`}>
			<a>{children}</a>
		</Link>
	);
};

export default DocLink;
