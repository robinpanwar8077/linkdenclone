import React from 'react'
import {IoIosPeople} from "react-icons/io"

function TagElement({tag}) {
  return (
    <div className='hashtag--item hover:bg-gray-200 px-5 py-1 flex gap-2 items-center text-gray-500 text-sm font-semibold'>
        <IoIosPeople/>
        <h4 className=' overflow-hidden'>{tag}</h4>
    </div>
  )
}

export default TagElement