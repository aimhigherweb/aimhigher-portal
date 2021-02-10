import { useContext } from 'react';
import Link from 'next/link';

import { CMSDataContext } from '../../parts/fetchData';
import Icon from '../../parts/icon'

import styles from './clientNav.module.scss'

const Nav = () => {
	const {clients} = useContext(CMSDataContext);

	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/dashboard">
						<a className={styles.client}>Dashboard</a>
					</Link>
				</li>
				{clients?.map((client) => (
					<li>
						<Link href={`/clients/${client.slug}`}>
							<a className={styles.client}>{client.name}</a>
						</Link>
						<ul className={styles.sub}>
							{client?.portal_permissions?.sections?.map(link => (
								<li>
									<Link 
										href={`/clients/${client.slug}/${link.slug}`}
										
									>
										<a 
											className={styles.link}
										>
											<Icon icon={link.slug} />
											{link.title}
										</a>
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
