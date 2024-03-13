import React from 'react'

const SidebarChat = () => {
  return (
    <div className='flex p-[10px] border-b-[1px] border-b-slate-400 cursor-pointer hover:bg-slate-300'>
      <img src="../assets/me.jpg" alt="user" className='w-[40px] h-[40px] rounded-full mr-[10px]' />
      <div>
        <p className='text-[0.97rem]'>Name</p>
        <p className='text-[0.97rem]'>Last message</p>
      </div>
    </div>
  )
}

export default SidebarChat