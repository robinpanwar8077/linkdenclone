import React from 'react'

function NavItem({icon,title}) {
  return (
    <div className=' flex flex-col justify-center items-center cursor-pointer'>
        {icon}
        <h3 className='text-sm hidden md:block '>{title}</h3>
    
    </div>
  )
}

export default NavItem