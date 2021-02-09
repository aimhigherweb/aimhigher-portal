import Link from 'next/link';

const links = [
	{
		label: `Analytics`,
		slug: `analytics`
	},
	{
		label: `Docs`,
		slug: `docs`
	},
	{
		label: `Projects`,
		slug: `projects`
	}
];

// eslint-disable-next-line one-var
const Nav = () => (
	<nav>
		<ul>
			{links.map((link) => (
				<li key={link.slug}>
					<Link href={`/dashboard/${link.slug}`}>
						<a>{link.label}</a>
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Nav;
