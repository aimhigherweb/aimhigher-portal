import {gql} from '@apollo/client'

export const GET_DOC = gql`
	query GetDoc($slug: String) {
		docs(
			where: {
				slug: $slug
			}
		) {
			title
			content
			clients {
				slug
			}
		}
	}
`

export const GET_DOCS = gql`
	query {
		docs {
			title
			slug
		}
	}
`

export const FILTER_DOCS = gql`
	query FilterDocs($clients: [String]) {
		docs(
			where: {
				clients: {
					slug_in: $clients
				}
			}
		) {
			title
			slug
			section {
				slug
				parent {
					slug
				}
			}
		}
	}
`