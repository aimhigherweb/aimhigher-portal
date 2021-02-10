import GoTrue from 'gotrue-js';

const auth = new GoTrue({
	APIUrl: `${process.env.NEXT_PUBLIC_PORTAL_URL}/.netlify/identity`,
	audience: ``,
	setCookie: true
});

export const login = (email, password, remember, loginSuccess) => {
	auth
		.login(email.value, password.value, remember.checked)
		.then((res) => {
			loginSuccess(res.token.access_token);
		})
		.catch((err) => console.log({ err }));
};

export const logout = (logoutSuccess) => {
	auth
		.currentUser()
		.logout()
		.then((res) => { logoutSuccess(); })
		.catch((err) => console.log(err));
};

export const currentUser = () => auth.currentUser();
