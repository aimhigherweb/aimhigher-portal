import remark from 'remark';
import remarkHtml from 'remark-html';

const processMarkdown = (markdown) => remark().use(remarkHtml).processSync(markdown).toString();

export default processMarkdown;
