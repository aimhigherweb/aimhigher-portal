import {
	VictoryLine, VictoryChart, VictoryScatter, VictoryGroup
} from 'victory';

const LineChart = ({ data }) => {
	const points = data.map((point) => ({
			x: point.date,
			y: parseInt(point.visits),
		})),
		points2 = data.map((point) => ({
			x: point.date,
			y: parseInt(point.visits) * Math.random(),
		}));

	return (
		<VictoryChart>
			{data.map((group) => (
				<VictoryGroup key={group.id}>
					<VictoryLine
						data={group.points}
					/>
					<VictoryScatter
						data={group.points}
					/>
				</VictoryGroup>
			))}
		</VictoryChart>
	);
};

export default LineChart;
