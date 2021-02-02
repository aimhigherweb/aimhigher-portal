import { format, parse } from 'date-fns';

const BuildStatus = ({ done, error, created_at }) => {
	const date = format(new Date(created_at), `dd-MMM`);
	let status = done ? `Completed` : `In Progress`;

	if (error === `Canceled build`) {
		status = `Cancelled`;
	} else if (error) {
		status = `Error`;
	}

	return (
		<p>
			<span>{status}</span> <span>{date}</span>
		</p>
	);
};

export default BuildStatus;
