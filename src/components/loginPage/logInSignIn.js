import React from 'react'
import LoginPage from './LoginPage'
import SigninPage from './SigninPage'
import { useSelector } from 'react-redux'

const LogInSignIn = () => {
  
  const logSign=useSelector((state)=>(state.loginSignin.loginSigninToggle))
  return (
    <div>
        {logSign?<LoginPage />:<SigninPage/>}
    </div>
  )
}

export default LogInSignIn