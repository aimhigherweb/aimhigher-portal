import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { UserContext } from "../_app";

const UnauthorisedPage = () => (
	<Layout>
		<h1>403 - Unauthorised</h1>
	</Layout>
);

export default UnauthorisedPage;
