import React, { useState } from 'react'
import PostType from './PostType'
import {RiGalleryFill,RiArticleLine} from "react-icons/ri"
import {BsPlayBtnFill} from "react-icons/bs"
import {MdEventNote} from "react-icons/md"
import {useSelector} from "react-redux"
import Profile from '../profile/Profile'


const CreatePost = ({handlePostCreation}) => {
  const [postContent,setPostContent]=useState("");
  const {profileUrl,email}=useSelector((store)=>(store.userDetails.user))

  const profilePic=()=>(
    profileUrl?(<img 
      src={profileUrl}
      alt=""
      className='aspect-square h-12 rounded-full object-cover'
      />):<Profile letter={email[0].toUpperCase()} />
  )

  return (
    <div>
        <div className="create--post--box border p-5 pb-3 bg-white border-gray-300 rounded-xl shadow-sm">
          <div className="start--post flex">
            {profilePic()}
            
            <form action=" " onSubmit={(e)=>{handlePostCreation(e,postContent);setPostContent("")}} className=' ml-3 px-4 w-full p-y border-2 border-gray-300 rounded-full flex'>
              
              <input type="text" 
                className=' border-none outline-none w-full bg-inherit placeholder:text-gray-600 font-semibold'
                placeholder='Start a post' 
                onChange={(e)=>{setPostContent(e.target.value)}} 
                value={postContent}

                />
                <button className='hidden'>btn</button>
            </form>
          </div>
          <div className="post--types px-3 pt-2">
            <ul className=' flex justify-between '>
              <li>
                <PostType 
                  icon={<RiGalleryFill className='text-blue-600'/>} 
                  title="Photo"
                />
              </li>
              <li>
                <PostType 
                  icon={<BsPlayBtnFill className=' text-green-600'/>} 
                  title="Video"
                />
              </li>
              <li>
                <PostType 
                  icon={<MdEventNote className=' text-amber-700'/>} 
                  title="Event"
                />
              </li>
              <li>
                <PostType 
                  icon={<RiArticleLine className=' text-red-800'/>} 
                  title="Article"
                />
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default CreatePost