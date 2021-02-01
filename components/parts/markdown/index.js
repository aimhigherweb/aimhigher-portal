import parseMarkdown from '../../../utils/markdown';

const Markdown = ({ markdown }) => {
	const content = parseMarkdown(markdown);

	return (
		<div dangerouslySetInnerHTML={{ __html: content }} />
	);
};

export default Markdown;
