const checkAccess = (user_roles, access_roles) => {
	return access_roles.some((role) => user_roles?.includes(role)) 
	|| user_roles?.includes(`admin`) 
	|| access_roles.includes('public')
	|| access_roles == []
}

export default checkAccess