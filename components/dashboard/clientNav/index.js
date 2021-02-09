import Link from 'next/link';

const Nav = () => (
	<nav>
		<ul>
			{/* {links.map((link) => (
				<li key={link.slug}>
					<Link href={`/dashboard/${link.slug}`}>
						<a>{link.label}</a>
					</Link>
				</li>
			))} */}
		</ul>
	</nav>
);

export default Nav;
