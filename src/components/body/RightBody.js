import React from 'react'
import NewsListItem from './NewsListItem'
import {BsInfoSquareFill} from "react-icons/bs"
import {AiFillCaretDown} from "react-icons/ai"
import { auth } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userDetails/userDetailsSlice'

function RightBody() {
  
  const dispatch=useDispatch();
  const logOut=async()=>{
    await signOut(auth);  
    dispatch(logout())
  }

  return (
    <div className="right--body w-4/12 hidden xl:block">
        <div className="news--feed--box bg-white border pt-5 pb-3 border-gray-300 rounded-xl shadow-sm">
          <div className="news--box--title flex items-center px-5 justify-between">
            <h2 className=' font-semibold text-gray-700 '>
              LinkedIn News
            </h2>
            <BsInfoSquareFill/>
          </div>
          <ul className='news--list mt-3'>
            <li>
              <NewsListItem 
                heading="Amaxon announces a new technology"
                relevance='2d'
                readersCount="1,422"
              />
            </li>
            <li>
              <NewsListItem 
                heading="The new era of Web3 and Block-Chain :"
                relevance='2d'
                readersCount="1,422"
              />
            </li>
            <li>
              <NewsListItem 
                heading="Reason why most startups fail!"
                relevance='2d'
                readersCount="1,422"
              />
            </li>
            <li>
              <NewsListItem 
                heading="Rising of computing power"
                relevance='1d'
                readersCount="3,455"
              />
            </li>
            <li>
              <NewsListItem 
                heading="Two top Meta execs step down"
                relevance='2d'
                readersCount="13,425"
              />
            </li>
          </ul>
          <button className='more--news flex items-center mx-8 px-2 py-1 rounded-md gap-1 text-sm text-gray-500 font-semibold hover:bg-gray-200'>
            Show more <AiFillCaretDown/>
          </button>
        </div>

        <div onClick={logOut} className="cursor-pointer">
          <h2 className=' text-center text-blue-500 my-8 underline'>Sign Out</h2>
        </div>
        
    </div>
  )
}

export default RightBody