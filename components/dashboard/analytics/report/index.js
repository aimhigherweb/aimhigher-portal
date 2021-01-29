import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';

import fetchReport from '../../../../utils/analytics/fetchReport';

import LineChart from '../../charts/line';

const Report = () => {
	const [data, setData] = useState([]),
		displayResults = (res) => {
			const queryResult = res.result?.reports[0].data.rows,
				id = `set-1`,
				result = queryResult.map((row) => {
					const date = parse(row.dimensions[0], `yyyyMMdd`, new Date()),
						dateString = format(date, `dd-MMM-yyyy`);

					return {
						x: dateString,
						y: row.metrics[0].values[0]
					};
				}),
				updateData = data,

				dataExists = updateData.some((set) => {
					if (set.id === id) {
						set = {
							...set,
							result
						};

						return true;
					}
				});

			if (dataExists) {
				setData(updateData);
			} else {
				setData([
					...data,
					{
						id,
						points: result
					}
				]);
			}
		},
		props = {
			viewId: process.env.NEXT_PUBLIC_GOOGLE_VIEW_ID,
			dateRanges: [
				{
					startDate: `31daysAgo`,
					endDate: `today`,
				},
			],
			metrics: [
				{
					expression: `ga:users`
				}
			],
			dimensions: [
				{
					name: `ga:date`,
				},
			]
		};

	useEffect(() => {
		fetchReport(props, displayResults);
	}, []);

	console.log(data);

	return <LineChart {...{ data }} />;
};

export default Report;
