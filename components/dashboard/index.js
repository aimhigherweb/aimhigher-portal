import NetlifyStatus from './netlify';
import Analytics from './analytics';

const Dashboard = ({
	client, name, analyticsView, netlifySite
}) => {
	console.log();

	return (
		<div>
			<h2>Dashboard</h2>
			<NetlifyStatus
				{...{
					site: netlifySite
				}}
			/>
			<Analytics />
		</div>
	);
};

export default Dashboard;
