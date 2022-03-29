import React from 'react'
import UserProfile from '../components/Profile/UserProfile'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const ApprRouter = () => {
	return (
		<Switch>
			<Route path='/' exact>
				<Redirect to='/home' />
			</Route>
			<Route path='/home' exact>
				<HomePage />
			</Route>
			<Route path='/auth'>
				<AuthPage />
			</Route>
			<Route path='/profile'>
				<PrivateRoute>
					<UserProfile />
				</PrivateRoute>
			</Route>
		</Switch>
	)
}

export default ApprRouter
