import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
	query GetProjects {
		projects {
			title
			slug
			website {
				domain
			}
		}
	}
`;

export const GET_PROJECT = gql`
	query GetProject($project: String) {
		project {
			
		}
	}
`