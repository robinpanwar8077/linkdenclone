import React from 'react'
import NavItem from './NavItem'
import {BsLinkedin,BsPeopleFill} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {ImHome3} from "react-icons/im"
import {MdOutlineWork} from "react-icons/md"
import {AiFillMessage} from "react-icons/ai"
import {MdNotificationsActive} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {BsGrid3X3GapFill} from "react-icons/bs"

const Navbar = () => {
  
  return (
    <div className='navbar w-full z-40 py-3 px-8 border-b-2 sticky top-0  bg-white'>
        <div className="nav-box md:w-5/6 flex justify-between mx-auto items-center ">
            <div className="search--section flex gap-2 md:w-1/2 ">
                <div className="icon text-blue-500 ">
                    <BsLinkedin className='text-4xl'/>
                </div>
                <form action="" className="submit--btn flex text-gray-600 bg-blue-100 px-4 items-center gap-2 w-3/5">
                    <BiSearch className='text-2xl '/>
                    <input type="text" name="search" placeholder='Search' className=' bg-transparent outline-none placeholder:text-inherit '/>
                    <button className="search--submit hidden">btn</button>
                </form>

            </div>
            
            <ul className="nav--section md:flex md:w-2/3 justify-between hidden text-2xl">
                <li><NavItem icon={<ImHome3/>} title='Home'/></li>
                <li className='hidden xxl:flex' ><NavItem icon={<BsPeopleFill />} title='My Network' /></li>
                <li className=' hidden lg:flex'><NavItem icon={<MdOutlineWork />} title='Jobs' /></li>
                <li><NavItem icon={<AiFillMessage />} title='Messaging'/></li>
                <li><NavItem icon={<MdNotificationsActive />} title='Notifications'/></li>
                <li><NavItem icon={<CgProfile />} title='Me'/></li>
                <li className='hidden xl:flex'><NavItem icon={<BsGrid3X3GapFill />} title='Work'/></li>
                <a href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_nav_upsell_text&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtmndjyGjR1Sub4gzj9XAdQ%3D%3D"
                className=' underline text-red-900 opacity-90 hidden xl:block w-28 text-center text-sm'>
                    Try Premium for free
                </a>

            </ul>
        </div>
    </div>
  )
}

export default Navbar