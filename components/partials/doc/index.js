import Markdown from '../../parts/markdown';

import styles from './doc.module.scss';

const Doc = ({ title, content }) => (
	<article className={styles.doc}>
		<h1 className={styles.title}>{title}</h1>
		<Markdown markdown={content} />
	</article>
);

export default Doc;
