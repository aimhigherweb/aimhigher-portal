import {
	VictoryLine, VictoryChart, VictoryScatter, VictoryGroup, VictoryAxis
} from 'victory';

const LineChart = ({ data }) => (
	<VictoryChart>
		<VictoryAxis
			crossAxis
			fixLabelOverlap={true}
		/>
		<VictoryAxis
			dependentAxis
		/>
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

export default LineChart;
