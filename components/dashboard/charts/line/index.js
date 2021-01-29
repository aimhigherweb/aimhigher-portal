import { VictoryLine, VictoryChart, VictoryScatter } from 'victory';

const LineChart = ({ data }) => {
	const points = data.map((point) => ({
			x: point.date,
			y: parseInt(point.visits),
		})),
		points2 = data.map((point) => ({
			x: point.date,
			y: parseInt(point.visits) * Math.random(),
		}));

	console.log(points);

	return (
		<VictoryChart>
			<VictoryLine
				data={points}
				animate={{
					duration: 2000,
					onLoad: { duration: 1000 }
				}}
			/>
			<VictoryScatter
				data={points}
			/>
			<VictoryLine
				data={points2}
				animate={{
					duration: 2000,
					onLoad: { duration: 1000 }
				}}
			/>
		</VictoryChart>
	);
};

export default LineChart;
