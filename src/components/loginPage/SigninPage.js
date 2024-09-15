import React, { useState } from 'react'
import {BsLinkedin} from "react-icons/bs"
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useDispatch, } from 'react-redux'
import {login} from '../../features/userDetails/userDetailsSlice'
import { toggle } from '../../features/loginSignin/loginsigninSlice'

const SigninPage = () => {

  const dispatch=useDispatch();

  const initialDetails={
    name:"",
    profileUrl:"",
    email:"",
    password:"",
    confirmPassword:"",
  }
  const [signInDetails,setSignInDetails]=useState(initialDetails);
  
  const handleSignin=async(event)=>{
    event.preventDefault();
    if (!(signInDetails.name && signInDetails.email && signInDetails.password && signInDetails.confirmPassword)){
        alert("Enter all the required details!!")
        return(0);
    }
    else if(signInDetails.password!==signInDetails.confirmPassword){
        alert("Passowrds dont match!")
        return(0);
    }

    try{
        const signinUser=await createUserWithEmailAndPassword(auth,signInDetails.email,signInDetails.password);
        await updateProfile(auth.currentUser,{
            displayName:signInDetails.name,
            photoURL:signInDetails.profileUrl
        })
        dispatch(login({
            userId:signinUser.user.uid,
            email:signinUser.user.email,
            name:signinUser.user.displayName,
            profileUrl:signinUser.user.photoURL,
        }))
        console.log("signedIn")
    }
    catch(err){
        alert(err.message)
    }
  }

  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center  relative bg-gray-100'>
        <h1 className=' absolute top-10 left-12 font-bold text-3xl text-blue-700 flex items-center gap-1 tracking-tight'>
            Linked<BsLinkedin/>
        </h1>
        <div className="signin--heading text-3xl text-center py-10  ">
            Make most of your Professional life
        </div>
        <div className=" p-6 rounded-lg w-1/4 bg-white min-w-[310px] " style={{boxShadow:"0 0 20px rgba(0,0,0,0.14)"}}>
            <form className=' flex flex-col gap-6 transition-all' onSubmit={handleSignin}>
                <input 
                    type="text" 
                    className='p-2 placeholder:text-gray-500 placeholder:text-base w-full border border-gray-400 rounded-md bg-inherit outline-blue-600'
                    placeholder='Name'
                    onChange={(e)=>{setSignInDetails((prev)=>(
                        {
                            ...prev,
                            name:e.target.value
                        }
                    ))}}
                    value={signInDetails.name}
                />
                <input 
                    type="text" 
                    className='p-2 placeholder:text-gray-500 placeholder:text-base w-full border border-gray-400 rounded-md bg-inherit outline-blue-600'
                    placeholder='Profile URL ( Optional )'
                    onChange={(e)=>{setSignInDetails((prev)=>(
                        {
                            ...prev,
                            profileUrl:e.target.value
                        }
                    ))}}
                    value={signInDetails.profileUrl}
                />
                <input 
                    type="email" 
                    className='p-2 placeholder:text-gray-500 placeholder:text-base w-full border border-gray-400 rounded-md bg-inherit outline-blue-600'
                    placeholder='Email'
                    onChange={(e)=>{setSignInDetails((prev)=>(
                        {
                            ...prev,
                            email:e.target.value
                        }
                    ))}}
                    value={signInDetails.email}
                />
                <input 
                    type="password"
                    className=' p-2 placeholder:text-gray-500 placeholder:text-base w-full border border-gray-400 rounded-md bg-inherit outline-blue-600'
                    placeholder='Password'
                    onChange={(e)=>{setSignInDetails((prev)=>(
                        {
                            ...prev,
                            password:e.target.value
                        }
                    ))}}
                    value={signInDetails.password}
                />
                <input 
                    type="password"
                    className=' p-2 placeholder:text-gray-500 placeholder:text-base w-full border border-gray-400 rounded-md bg-inherit outline-blue-600'
                    placeholder='Confirm Password'
                    onChange={(e)=>{setSignInDetails((prev)=>(
                        {
                            ...prev,
                            confirmPassword:e.target.value
                        }
                    ))}}
                    value={signInDetails.confirmPassword}
                />
                <div className="cursor-pointer text-center text-xs text-gray-600 px-4">
                    By clicking Agree & Join, you agree to the LinkedIn 
                    <span className=' text-blue-600 font-semibold'> User Agreement, Privacy Policy</span>, and  
                    <span className=' text-blue-600 font-semibold'> Cookie Policy</span>.
                </div>
                <button className=' bg-blue-600 p-4 w-full rounded-full text-white font-semibold cursor-pointer outline-blue-500'>
                    Agree & Join
                </button>
            </form>
            <div className="sign--up text-center text-gray-700 mt-5 cursor-pointer " onClick={()=>dispatch(toggle())}>
                Already on LinkedIn ? <span className=' text-blue-600 font-semibold ' > Sign in</span>
            </div>
        </div>
    </div>
  )
}

export default SigninPage