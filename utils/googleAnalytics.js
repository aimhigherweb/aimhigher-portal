const initAuth = () => window.gapi.auth2.init({
	client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
	scope: `https://www.googleapis.com/auth/analytics.readonly`
});

export const checkSignedIn = () => new Promise((resolve, reject) => {
	initAuth()
		.then(() => {
			const auth = window.gapi.auth2.getAuthInstance();
			resolve(auth.isSignedIn.get());
		})
		.catch((err) => {
			reject(err);
		});
});

export const renderButton = () => {
	window.gapi.signin2.render(`signin-button`, {
		scope: `profile email`,
		width: 240,
		height: 50,
		longtitle: true,
		theme: `dark`,
		onsuccess: onSuccess,
		onfailure: onFailure,
	});
};

const onSuccess = (googleUser) => {
	console.log(`Logged in as: ${googleUser.getBasicProfile().getName()}`);
};

// eslint-disable-next-line one-var
const onFailure = (error) => {
	console.error(error);
};
