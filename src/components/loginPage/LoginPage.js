import React, { useState } from 'react'
import {BsLinkedin} from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { toggle } from '../../features/loginSignin/loginsigninSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import {login} from '../../features/userDetails/userDetailsSlice'


const LoginPage = () => {

  const dispatch=useDispatch();

  const initialValue={
    email:"",
    password:"",
    profileUrl:"",
    name:""
  }
  
  const [emailPassword, setEmailPassword]=useState(initialValue);
  
  const handleLogin=async(event)=>{
    event.preventDefault();
    if (!(emailPassword.email && emailPassword.password)){
        alert("Enter all the required details!!")
        return(0);
    }

    try{
        const loginUser=await signInWithEmailAndPassword(auth,emailPassword.email,emailPassword.password);
        dispatch(login({
            userId:loginUser.user.uid,
            email:loginUser.user.email,
            profileUrl:loginUser.user.photoURL,
            name:loginUser.user.displayName,
        }))
    }
    catch(err){
        alert(err.message)
    }
  }


  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center relative'>
        <h1 className=' absolute top-10 left-12 font-bold text-3xl text-blue-700 flex items-center gap-1 tracking-tight'>
            Linked<BsLinkedin/>
        </h1>
        <div className=" p-6 rounded-lg w-1/4 min-w-[310px] " style={{boxShadow:"0 0 20px rgba(0,0,0,0.14)"}}>
            <h2 className=' font-semibold text-3xl '>
                Sign in
            </h2>
            <p className='text-sm mb-7 mt-1'>Stay updated on your professional world</p>
            <form className=' flex flex-col gap-6 transition-all' action="" onSubmit={handleLogin}>
                <input 
                    type="email"
                    className='p-3 placeholder:text-gray-500 placeholder:text-lg w-full border-2 border-gray-400 rounded-md bg-inherit outline-blue-600'
                    placeholder='Email or Phone'
                    onChange={(e)=>{setEmailPassword((prev)=>(
                        {
                            ...prev,
                            email:e.target.value
                        }
                    ))}}
                    value={emailPassword.email}
                />
                <input 
                    type="password"
                    className=' p-3 placeholder:text-gray-500 placeholder:text-lg w-full border-2 border-gray-400 rounded-md bg-inherit outline-blue-600'
                    placeholder='Password'
                    onChange={(e)=>{setEmailPassword((prev)=>(
                        {
                            ...prev,
                            password:e.target.value
                        }
                    ))}}
                    value={emailPassword.password}
                />
                <div className="forgotPassord text-blue-600 font-semibold cursor-pointer">
                    Forgot password?
                </div>
                <button className=' bg-blue-600 p-4 w-full rounded-full text-white font-semibold cursor-pointer'>
                    Sing in
                </button>
            </form>
            
        </div>
        <div className="sign--up text-center text-gray-700 mt-10 cursor-pointer" onClick={()=>dispatch(toggle())}>
                New to Linkedin ? 
                <span className=' text-blue-600 font-semibold' > Join now</span>
        </div>
    </div>
  )
}

export default LoginPage