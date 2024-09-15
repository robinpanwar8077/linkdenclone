import React from 'react'
import LeftBody from './LeftBody'
import MainBody from './MainBody'
import RightBody from './RightBody'

function Body() {
  return (
    <div className=' bg-gray-100 py-4 px-7'>
        <div className="body--container flex md:w-5/6 mx-auto gap-7">
            <LeftBody/>
            <MainBody/>
            <RightBody/>

        </div>
    
    </div>
  )
}

export default Body