import React from 'react'
import { MdDonutLarge } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='flex flex-col flex-[0.35] bg-slate-50 overflow-y-scroll min-h-[100vh]'>
      <div className='flex justify-between p-[20px] bg-[#ededed]'>
        <img src="../assets/me.jpg" alt="user" className='rounded-full w-[40px] h-[40px]' />
        <div className='flex items-center justify-between min-w-[10vw]'>
          <MdDonutLarge />
          <MdChat />
          <IoEllipsisVerticalSharp />
        </div>
      </div>
      <div className='flex bg-[white] items-center rounded-lg p-1'>
        <FaSearch />
        <input type="text" placeholder="Search or start new chat" className='grow outline-none p-1 px-3 text-[0.97rem]' />
      </div>
      <div className='mt-5'>
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar