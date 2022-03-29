import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const { isAuth} = useSelector((state) => state.auth)
	return isAuth ? (
		<React.Fragment>{children}</React.Fragment>
	) : (
		<Redirect to='/auth'></Redirect>
	)
}

export default PrivateRoute
