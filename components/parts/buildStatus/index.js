import { format, parse } from 'date-fns';

import Icon from '../../../lib/parts/icon';

import slugify from '../../../utils/slugify';

import styles from './buildStatus.module.scss';

const BuildStatus = ({ done, error, created_at }) => {
	const date = format(new Date(created_at), `dd-MMM`);
	let status = done ? `Completed` : `In Progress`;

	if (error === `Canceled build`) {
		status = `Cancelled`;
	} else if (error) {
		status = `Error`;
	}

	return (
		<p className={`${styles.badge}  ${styles[slugify(status)]}`}>
			<Icon icon={styles[slugify(status)]} className={styles.icon} />
			<span className={styles.status}>{status}</span> <span>{date}</span>
		</p>
	);
};

export default BuildStatus;
