import {useQuery} from '@apollo/client'
import Link from 'next/link';

import Layout from '../../components/layout';
import RestrictedPage from '../../components/parts/restricted_page';
import DocLink from '../../components/parts/docLink';

import { FILTER_DOCS } from '../../utils/cms/docs/index';

const Docs = () => {
	// TODO: Show docs relevant to logged in client
	const options = {
		variables: {
			clients: []
		},
	},
	{loading, error, data} = useQuery(FILTER_DOCS, options),
	sections = {}

	data?.docs.forEach(doc => {
		const section = doc?.section,
		parent = section?.parent

		if(parent) {
			if(sections[parent.slug]) {
				if(sections[parent.slug].sections[section.slug]) {
					sections[parent.slug].sections[section.slug].docs.push(doc)
				}
				else {
					sections[parent.slug].sections[section.slug] = {
						...section,
						docs: [doc]
					}
				}
			}
			else {
				sections[parent.slug] = {
					...parent,
					sections: {
						[section.slug]: {
							...section,
							docs: [doc]
						}
					},
					docs: []
				}
			}
		}
		else if (section) {
			if(sections[section.slug]) {
				sections[section.slug].docs.push(doc)
			}
			else {
				sections[section.slug] = {
					...section,
					docs: [doc]
				}
			}
		}
		else {
			if(sections.custom) {
				sections.custom.docs.push(doc)
			}
			else {
				sections.custom = {
					name: 'Custom',
					docs: [doc]
				}
			}
		}
	})

	console.log(sections)

	return (
		<Layout>
			<RestrictedPage>
				<h1>Docs</h1>
				{loading 
					? <p>Loading...</p>
					: <ul>
						{Object.values(sections)?.map(section => (
							<li key={section.slug}>
								<h2>{section.name}</h2>
								<ul>
									{section?.docs.map(doc => (
										<li key={doc.slug}>
											<DocLink {...doc}>
												{doc.title}
											</DocLink>
										</li>
									))}
								</ul>
								{
									section.sections &&
									<ul>
										{Object.values(section.sections).map(sub => (
											<li key={sub.slug}>
												<h3>{sub.name}</h3>
												<ul>
													{sub?.docs.map(doc => (
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
				}				
			</RestrictedPage>
		</Layout>
	);
};

export default Docs;
