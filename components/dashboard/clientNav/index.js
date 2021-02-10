import { useContext } from 'react';
import Link from 'next/link';

import { CMSDataContext } from "../../parts/fetchData";

const Nav = () => {
	const {clients} = useContext(CMSDataContext);

	return (
		<nav>
			<ul>
				{clients?.map((client) => (
					<li>
						<Link href={`/clients/${client.slug}`}>
							<a>{client.name}</a>
						</Link>
						<ul>
							{client?.portal_permissions?.sections?.map(link => (
								<li>
									<Link 
										href={`/clients/${client.slug}/${link.slug}`}
									>
										<a>{link.title}</a>
									</Link>
								</li>
								
							))}
						</ul>
					</li>
				))}
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
};

export default Nav;
