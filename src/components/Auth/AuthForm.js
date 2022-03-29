import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signIn, signUp } from '../../store/auth-slice'
import classes from './AuthForm.module.css'

const AuthForm = () => {
	const history = useHistory()
	const {isAuth,status,error} = useSelector(state=>state.auth)
	const [isLogin, setIsLogin] = useState(true)
	const dispatch = useDispatch()
	const emailInputRef = useRef()
	const passwordInputRef = useRef()

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState)
	}
	const submitHandler = (e) => {
		e.preventDefault()
		const enteredEmail = emailInputRef.current.value
		const enteredPassword = passwordInputRef.current.value

		if (isLogin) {
			dispatch(signIn({email: enteredEmail,password: enteredPassword}))
		} else {
			dispatch(signUp({email: enteredEmail,password: enteredPassword}))
		}
	}
	useEffect(()=>{
		if(isAuth) {
			history.push('/profile')
		}
	},[isAuth])

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<strong>{error}</strong>
			<br/>
			{error && <br/>}
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input
						ref={emailInputRef}
						type='email'
						id='email'
						required
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						ref={passwordInputRef}
						type='password'
						id='password'
						required
					/>
				</div>
				<div className={classes.actions}>
					{status !== 'loading' && (
						<button>{isLogin ? 'Login' : 'Create Account'}</button>
					)}
					{status === 'loading' && <p>Pending request...</p>}
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin
							? 'Create new account'
							: 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	)
}

export default AuthForm
