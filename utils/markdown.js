import remark from 'remark';
import stringify from 'rehype-stringify';
import rehype from 'remark-rehype'
import parse from 'remark-parse';
import slug from 'remark-slug';
import githubFlavour from 'remark-gfm'

const processMarkdown = (content) => remark()
	.use(parse)
	.use(githubFlavour)
	.use(rehype)
	.use(stringify)
	.processSync(content);

export default processMarkdown;
