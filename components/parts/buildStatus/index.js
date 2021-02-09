import { format, parse } from 'date-fns';

import Error from '../../../img/error.svg'
import Success from '../../../img/success.svg'
import InProgress from '../../../img/in-progress.svg'
import Cancelled from '../../../img/cancel.svg'

import styles from './buildStatus.module.scss'


const BuildStatus = ({ done, error, created_at }) => {
	const date = format(new Date(created_at), `dd-MMM`);
	let status = done ? `Completed` : `In Progress`,
	Icon = done ? Success : InProgress;

	if (error === `Canceled build`) {
		status = `Cancelled`;
		Icon = Cancelled
	} else if (error) {
		status = `Error`;
		Icon = Error
	}

	return (
		<p className={`${styles.badge}  ${styles[status.toLowerCase().replace(' ', '-')]}`}>
			<Icon className={styles.icon} />
			<span className={styles.status}>{status}</span> <span>{date}</span>
		</p>
	);
};

export default BuildStatus;
