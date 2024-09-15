import React from 'react'

const PostType = ({icon,title}) => {
  return (
    <div className='flex gap-3 cursor-pointer relative px-3 py-2 pb-5 rounded-md text-2xl items-center hover:bg-gray-200'>
        {icon}
        <h4 className='md:text-lg font-semibold absolute md:relative md:bottom-0 md:left-0  -bottom-[2px] left-[5px] text-gray-500 text-sm '>{title}</h4>
    </div>
  )
}

export default PostType