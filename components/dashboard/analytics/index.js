import { Fragment, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { AnalyticsDashboard, SessionsByDateChart } from 'react-analytics-charts';
import { renderButton, checkSignedIn } from '../../../utils/analytics/auth';
import Report from './report';

// eslint-disable-next-line one-var
const Analytics = () => {
	const [isSignedIn, setIsSignedIn] = useState(false),
		updateSignIn = (signedIn) => {
			setIsSignedIn(signedIn);

			if (!signedIn) {
				renderButton();
			}
		},
		init = () => {
			checkSignedIn()
				.then((signedIn) => {
					updateSignIn(signedIn);
				})
				.catch((err) => {
					console.error(err);
				});
		};

	useEffect(() => {
		window.gapi.load(`auth2`, init);
	});

	return (
		<div>
			<h3>Analytics</h3>
			{!isSignedIn
				? <div id="signin-button"></div>
				: <Report />
			}
		</div>
	);
};

export default Analytics;
