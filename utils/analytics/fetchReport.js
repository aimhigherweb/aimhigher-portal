const fetchReport = (props, display) => {
	window.gapi.client.request({
		path: `/v4/reports:batchGet`,
		root: `https://analyticsreporting.googleapis.com/`,
		method: `POST`,
		body: {
			reportRequests: [
				{
					dateRanges: [
						{
							startDate: `31daysAgo`,
							endDate: `today`,
						},
					],
					dimensions: [
						{
							name: `ga:date`,
						},
					],
					...props
				},
			],
		},
	})
		.then(display);
};

export default fetchReport;
