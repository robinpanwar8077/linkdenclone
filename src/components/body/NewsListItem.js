import React from 'react'
import {GoPrimitiveDot} from "react-icons/go"

const NewsListItem = ({heading,relevance,readersCount}) => {
  return (
    <div className='news--item flex px-4 py-1 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200'>
        <div className="p-3 pt-1 pl-0">
            <GoPrimitiveDot/>
        </div>
        <div className="news--thumbnail">
            <h3>{heading}</h3>
            <p className=' text-gray-300 text-sm'>
                {relevance} ago <span>.</span> 
                {readersCount} readers </p>
        </div>
    </div>
  )
}

export default NewsListItem