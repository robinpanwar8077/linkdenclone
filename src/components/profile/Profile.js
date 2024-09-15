import React from 'react'

const Profile = ({letter}) => {
  return (
    <div >
     <div className="aspect-square rounded-full w-12 bg-blue-500  flex justify-center items-center font-semibold text-2xl text-white">
        {letter}
     </div>
    </div>
  )
}

export default Profile