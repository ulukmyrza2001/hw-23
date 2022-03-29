import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { authActions } from '../../store/auth-slice'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  const dispatch = useDispatch()
	const { isAuth} = useSelector((state) => state.auth)
  useEffect(()=>{
		localStorage.setItem('authen',JSON.stringify(isAuth))
  },[isAuth])
	return (
		<header className={classes.header}>
			<NavLink  to='/'>
				<div className={classes.logo}>React Auth</div>
			</NavLink>
			<nav >
				<ul>
						<li>
							<NavLink  to='/home' activeStyle={{color : '#c291e2'}}>Home</NavLink>
						</li>
					{!isAuth &&  <li>
							<NavLink  to='/auth'  activeStyle={{color : '#c291e2'}}>Login</NavLink>
						</li>}
						{isAuth && <li>
							<NavLink  to='/profile'  activeStyle={{color : '#c291e2'}}>Profile</NavLink>
						</li>}
						{isAuth && <li>
							<button onClick={()=>dispatch(authActions.logout())}>Logout</button>
						</li>}
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
