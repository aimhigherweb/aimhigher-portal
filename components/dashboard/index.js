import NetlifyStatus from './netlify';
import Analytics from './analytics';

const Dashboard = () => {
	console.log();

	return (
		<div>
			<h2>Dashboard</h2>
			<NetlifyStatus />
			<Analytics />
		</div>
	);
};

export default Dashboard;
