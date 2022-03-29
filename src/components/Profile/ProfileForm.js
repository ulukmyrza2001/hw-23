import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { BASE_KEY, PASSWORD_CHANGE } from '../../utils/constants/general';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const auth = useSelector(state=>state.auth)
  const newPassWordInputRef = useRef()
  const submitHandler = (event) =>{
    event.preventDefault()
    const enteredNewPassword = newPassWordInputRef.current.value;

    fetch(`${PASSWORD_CHANGE}${BASE_KEY}`,)


  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
