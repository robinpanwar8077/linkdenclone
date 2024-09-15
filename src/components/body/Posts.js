import React from 'react'
import PostReactionItem from './PostReactionItem'
import { forwardRef } from 'react'
import Profile from '../profile/Profile';

const Posts = forwardRef(({name,nameDetails,content,profileUrl},ref) => {

  const profileImg=()=>(
    profileUrl?(<img 
        src={profileUrl}
        alt=""
        className='aspect-square rounded-full w-12 object-cover'
    />):<Profile letter={name[0].toUpperCase()} />
  )


  const Comment=()=>{
    return(
        <svg width="20"  height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_33_37"  maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
        <rect width="120" height="120" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_33_37)">
        <path d="M30 74H70V64H30V74ZM30 59H90V49H30V59ZM30 44H90V34H30V44ZM10 114V24C10 21.25 10.9792 18.8958 12.9375 16.9375C14.8958 14.9792 17.25 14 20 14H100C102.75 14 105.104 14.9792 107.063 16.9375C109.021 18.8958 110 21.25 110 24V84C110 86.75 109.021 89.1042 107.063 91.0625C105.104 93.0208 102.75 94 100 94H30L10 114ZM25.75 84H100V24H20V89.625L25.75 84Z" fill="#1C1B1F"/>
        </g>
        </svg>
    )
  }

  const Like=()=>{
    return(
        <svg width="20"  height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_32_31"  maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
        <rect width="120" height="120" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_32_31)">
        <path d="M90 105H40V40L75 5L81.25 11.25C81.8333 11.8333 82.3125 12.625 82.6875 13.625C83.0625 14.625 83.25 15.5833 83.25 16.5V18.25L77.75 40H105C107.667 40 110 41 112 43C114 45 115 47.3333 115 50V60C115 60.5833 114.937 61.2083 114.812 61.875C114.687 62.5417 114.5 63.1667 114.25 63.75L99.25 99C98.5 100.667 97.25 102.083 95.5 103.25C93.75 104.417 91.9167 105 90 105ZM30 40V105H10V40H30Z" fill="#1C1B1F"/>
        </g>
        </svg>
    )
  }

  const Repost=()=>{
    return(
        <svg width="20"  height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_33_55"  maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
        <rect width="120" height="120" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_33_55)">
        <path d="M35 110L15 90L35 70L42 77.25L34.25 85H85V65H95V95H34.25L42 102.75L35 110ZM25 55V25H85.75L78 17.25L85 10L105 30L85 50L78 42.75L85.75 35H35V55H25Z" fill="#1C1B1F"/>
        </g>
        </svg>
    )
  }

  const Send=()=>{
    return(
        <svg width="20"  height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_33_67"  maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
        <rect width="120" height="120" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_33_67)">
        <path d="M63.1967 113.872L41.9835 92.6588L63.1967 57.3035L27.8414 78.5167L6.62817 57.3035L102.088 18.4126L63.1967 113.872Z" fill="#1C1B1F"/>
        </g>
        </svg>
    )
  }

  


  
  return (
    <div ref={ref} className='posts border p-5 pb-1 bg-white border-gray-300 rounded-xl shadow-sm'>
        <div className="post--profile flex gap-3">
            <div>
                {profileImg()}
                
            </div>
            <div className="post--profile--head">
                <h3 className=' font-bold '>
                    {name}
                </h3>
                <h4 className=' text-sm font-semibold text-gray-500'>
                    {nameDetails}
                </h4>
            </div>
        </div>
        <div className="post--content font-semibold text-lg py-4 border-b-2 mb-1">
            <h2>
                {content}
            </h2>
        </div>
        <div className="post--reactions">
            <ul className='flex justify-around gap-1'>
                <li>
                    <PostReactionItem
                        icon={<Like/>}
                        title="Like"
                    />
                </li>
                <li>
                    <PostReactionItem
                        icon={<Comment/>}
                        title="Comment"
                    />
                </li>
                <li>
                    <PostReactionItem
                        icon={<Repost/>}
                        title="Repost"
                    />
                </li>
                <li>
                    <PostReactionItem
                        icon={<Send/>}
                        title="Send"
                    />
                </li>
            </ul>
        </div>
    </div>
  )
})

export default Posts