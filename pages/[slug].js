import { useRouter } from 'next/router';

const DocPage = ({ params }) => {
	const router = useRouter(),
		{ slug } = router.query;
	return (
		<h1>Doc Page {slug}</h1>
	);
};

export default DocPage;
