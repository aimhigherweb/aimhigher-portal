const checkAccess = (user_roles, access_roles) => {
	const hasRole = access_roles.some((role) => user_roles?.includes(role))
	const isAdmin = user_roles?.includes(`admin`) 
	const isPublic = access_roles.includes('public') || access_roles == []
	return  hasRole || isAdmin || isPublic
}

export default checkAccess