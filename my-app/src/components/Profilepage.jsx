import React from 'react'
import { Outlet } from 'react-router-dom'
import Headerpage from '../Page/Headerpage'
import Sidebarpage from '../Page/Sidebarpage'

function Profilepage() {
  return (
    <div className="min-h-screen">

       
        <div className="w-full ">
            <Headerpage />

            <div className="flex w-64 bg-gray-400 md:w-1/5 border-r  fixed">          
    
                <Sidebarpage />
            </div>
            <div className='ml-70' >
                <Outlet/>
            </div>
        </div>
        </div>    
    
  )
}

export default Profilepage
