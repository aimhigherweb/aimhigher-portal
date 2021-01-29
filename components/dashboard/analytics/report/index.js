import React, { useState, useEffect } from 'react';
import { parse, format, addDays } from 'date-fns';

import fetchReport from '../../../../utils/analytics/fetchReport';

import LineChart from '../../charts/line';

const MonthlyUsers = () => {
	const [data, setData] = useState([]),
		[compareData, setCompareData] = useState([]),
		displayResults = (res) => {
			const queryResult = res.result?.reports[0].data.rows,
				id = `set-1`,
				result = queryResult.map((row) => {
					const date = parse(row.dimensions[0], `yyyyMMdd`, new Date()),
						dateString = format(date, `dd-MMM-yyyy`);

					return {
						x: dateString,
						y: parseInt(row.metrics[0].values[0]),
					};
				});

			setData(
				{
					id,
					name: id,
					xUnit: `Date`,
					yUnit: `users`,
					points: result
				}
			);
		},
		compareResults = (res) => {
			const queryResult = res.result?.reports[0].data.rows,
				id = `compare-1`,
				result = queryResult.map((row) => {
					const date = parse(row.dimensions[0], `yyyyMMdd`, new Date()),
						prevPeriod = addDays(date, 31),
						dateString = format(prevPeriod, `dd-MMM-yyyy`);

					return {
						x: dateString,
						y: parseInt(row.metrics[0].values[0]),
						date: format(date, `dd-MMM-yyyy`),
					};
				});

			setCompareData(
				{
					id,
					xUnit: `Date`,
					yUnit: `users`,

					points: result
				}
			);
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
		fetchReport({
			...props,
			dateRanges: [
				{
					startDate: `63daysAgo`,
					endDate: `32daysAgo`,
				},
			]
		}, compareResults);
	}, []);

	return <LineChart {...{ data: [data, compareData] }} />;
};

export default MonthlyUsers;
