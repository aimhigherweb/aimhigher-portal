import remark from 'remark';
import html from 'remark-html';
import markdown from 'remark-parse';
import slug from 'remark-slug';

const processMarkdown = (content) => remark()
	.use(markdown)
	.use(html)
	.processSync(content)
	.toString();

export default processMarkdown;
