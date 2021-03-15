import { useContext } from 'react';

import DocLink from '../docLink';

import { CMSDataContext } from '../fetchData';

import styles from './docsList.module.scss';

const DocsList = () => {
	const { docs } = useContext(CMSDataContext);
	const sections = {};

	docs.forEach((doc) => {
		const section = doc?.section;
		const parent = section?.parent;

		if (parent) {
			if (sections[parent.slug]) {
				if (sections[parent.slug].sections[section.slug]) {
					if (sections[parent.slug].sections[section.slug].docs) {
						sections[parent.slug].sections[section.slug].docs.push(doc);
					} else {
						sections[parent.slug].sections[section.slug].docs = [doc];
					}
				} else {
					sections[parent.slug].sections[section.slug] = {
						...section,
						docs: [doc]
					};
				}
			} else {
				sections[parent.slug] = {
					...parent,
					sections: {
						[section.slug]: {
							...section,
							docs: [doc]
						}
					},
				};
			}
		} else if (section) {
			if (sections[section.slug]) {
				sections[section.slug].docs.push(doc);
			} else {
				sections[section.slug] = {
					...section,
					docs: [doc]
				};
			}
		} else if (sections.custom) {
			sections.custom.docs.push(doc);
		} else {
			sections.custom = {
				name: `Custom`,
				docs: [doc]
			};
		}
	});

	return (
		<ul className={styles.docs}>
			{Object.values(sections)?.map((section) => (
				<li key={section.slug}>
					<h2>{section.name}</h2>
					{section?.docs
						&& <ul>
							{section.docs.map((doc) => (
								<li key={doc.slug}>
									<DocLink {...doc}>
										{doc.title}
									</DocLink>
								</li>
							))}
						</ul>
					}
					{
						section.sections
									&& <ul>
										{Object.values(section.sections).map((sub) => (
											<li key={sub.slug}>
												<h3>{sub.name}</h3>
												<ul>
													{sub?.docs.map((doc) => (
														<li key={doc.slug}>
															<DocLink {...doc}>
																{doc.title}
															</DocLink>
														</li>
													))}
												</ul>
											</li>
										))}
									</ul>
					}
				</li>
			))}
		</ul>
	);
};

export default DocsList;
