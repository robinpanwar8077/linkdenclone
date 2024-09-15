import React from 'react'
import {BsBookmarksFill} from 'react-icons/bs'
import {GrAdd} from 'react-icons/gr'
import TagElement from './TagElement'
import {useSelector} from "react-redux"

const LeftBody=()=>{
  const {name,profileUrl,email}=useSelector((store)=>(store.userDetails.user))


  const profilePic=()=>(
    profileUrl?(<img
      src={profileUrl}
      alt=""
      className="profile--pic object-cover object-top aspect-square rounded-full border-white border bg-white w-1/4" 

    />):(
      <div className="aspect-square rounded-full w-1/4 bg-blue-500 flex justify-center items-center font-semibold text-2xl text-white border-white border">
        {email[0].toUpperCase()}
      </div>
    )
  )

  return (
  <>
    <div className="left--body w-3/12 lg:flex hidden flex-col gap-4  ">

      <div className="l-b-c1 border cursor-pointer border-gray-300 rounded-xl shadow-sm bg-white">
        <div className="profile--container shadow-lg ">
          <div className="profile-bg-container bg-gray-500 h-16 rounded-t-xl">
            <img src="https://resumespice.com/wp-content/uploads/2021/03/1.png"
              className=' object-cover h-full w-full rounded-t-xl'
              alt="" />
          </div>
        </div>
        
        <div className="profile--details flex flex-col hover:bg-gray-200 justify-center items-center -mt-8 ">
          
          {profilePic()}
          <h2 className="user--name font-bold text-xl mt-3">{name}</h2>
          <h3 className=' text-sm font-semibold text-gray-500 mb-7'>{email}</h3>
        </div>

        <div className="connections--box hover:bg-gray-200  flex justify-between p-4 border-t border-gray-300">
          <div className="connections--h">
            <h4 className="conn text-gray-500 text-sm font-semibold">Connections</h4>
            <h5 className="connection-note font-semibold text-sm">
              Grow your network
            </h5>
          </div>
          <div className="conn-num text-blue-600 font-bold">
            5
          </div>
        </div>

        <div className="premium--ad p-4 hover:bg-gray-200 border-t border-gray-300">
          <h4 className="premium-h text-gray-500 text-sm ">
            Access exclusive tools & insights
          </h4>
          <span className="premium-link underline text-sm font-semibold">
            Try premuum for free
          </span>
        </div>

        <div className="my--items flex items-center p-5 gap-3 hover:bg-gray-200 border-t border-gray-300">
          <BsBookmarksFill className=' text-gray-600' />
          <h3 className=' text-sm text-gray-600 font-semibold'>Myitems</h3>
        </div>
      </div>

      <div className="l-b-c2 border cursor-pointer border-gray-300 rounded-xl shadow-sm pt-5 pb-0 bg-white">
        <div className="recent--tags">
          <h3 className=' text-sm pb-3 px-5 text-gray-500'>Recent</h3>
          <ul>
            <li ><TagElement tag="Js developers community"/></li>
            <li><TagElement tag="GreekForGreeks"/></li>
            <li><TagElement tag="HackerRank"/></li>
          </ul>
        </div>
        <h3 className=' pt-3 px-5 pb-1 hover:underline text-blue-400 font-bold'>Groups</h3>
        <ul>
          <li><TagElement tag="Js developers community"/></li>
          <li><TagElement tag="GreekForGreeks"/></li>
          <li><TagElement tag="HackerRank"/></li>
          <li><TagElement tag="LinkedIn"/></li>
          <a href="none " className=' px-5 text-gray-500 text-sm font-semibold'>See all</a>
        </ul>
        <div className="event--box hover:underline mt-5 px-5 mb-3 text-blue-400 font-bold flex items-center justify-between">
          <h3 >
            Events
          </h3>
          <GrAdd/>
        </div>
        <div className="followed--hashtags hover:underline px-5 text-blue-400 font-bold mb-3">
          Followed Hashtags
        </div>
        <div className='w-full h-1 bg-gray-200'></div>
        <button className=' w-full mx-auto text-gray-500 font-bold py-5 hover:bg-gray-200'>
          Discover more
        </button>
        
      </div>

    </div>
  </>
  )
}

export default LeftBody