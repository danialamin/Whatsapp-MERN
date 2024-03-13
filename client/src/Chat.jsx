import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";


const Chat = () => {
  return (
    <div className='flex flex-col flex-[0.65] min-h-[100vh] overflow-x-hidden'>
      <div className='flex items-center px-2 py-1 bg-gray-100 shadow-2xl'>
        <img src="../assets/me.jpg" alt="user" className='h-[40px] w-[40px] rounded-full mr-[20px]'/>
        <div className='grow'>
          <p className='font-[600] text-[0.97rem]'>Person name</p>
          <p className='text-[0.95rem]'>Last seen at</p>
        </div>
        <div className='flex gap-3'>
          <FaSearch size={20} className='cursor-pointer'/>
          <GoPaperclip size={20} className='cursor-pointer' />
          <IoEllipsisVerticalSharp size={20} className='cursor-pointer' />
        </div>
      </div>

      <div className='grow bg-[url("https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg")] opacity-70 bg-center p-[30px] overflow-y-scroll'>
        <p className='relative text-[16px] p-[10px] w-fit rounded-[10px] bg-[white] mb-[30px] max-w-[400px] break-all'>
          <span className='absolute top-[-15px] font-[800] text-[0.7rem]'>Danial</span>
          This is a messageVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVvvvvvvvvvvvvvvvVVVVVVVV
          <span className='ml-[10px] text-[0.7rem]'>{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className='flex items-center py-2 px-3 pr-6 gap-3'>
        <MdOutlineEmojiEmotions size={25} className='cursor-pointer'/>
        <form className='grow flex'>
          <input type="text" className='grow py-1 px-2 outline-none rounded-lg' />
          <button className='hidden'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat