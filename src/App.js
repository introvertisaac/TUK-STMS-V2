import React from "react"
import {BsArrowLeftShort} from 'react-icons/bs'
import { useState } from "react"
import {RxFigmaLogo} from 'react-icons/rx'
import {RxDashboard} from 'react-icons/rx'
import {HiOutlineTicket} from 'react-icons/hi'
import {BsPlusSquare} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {FiHelpCircle} from 'react-icons/fi'
import {SlLogout} from 'react-icons/sl'
// import tuklogo from '../src/components/images/tuklogo.png'
import tuklogov1 from '../src/components/images/tuklogov1.jpg'
  


export default function App() {

  const [open, setOpen] = useState(true);
  const Menus = [
    {title: "Dashboard"},
    {title: "Tickets", icon: <HiOutlineTicket/>},
    {title: "New ticket" , icon: <BsPlusSquare/>},
    {title: "Profile", spacing: true , icon: <CgProfile/>},
    {title: "Help" , icon: <FiHelpCircle/>},
    {title: "Logout" , icon: <SlLogout/>},

  ];
  return (
    <div className="flex">


      <div className={`bg-[#008080] h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300  relative`}>
        <BsArrowLeftShort className={`bg-white text-blue text-3xl rounded-full absolute -right-3 
        top-9 border border-[#008080] cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>

        <div className="inline-flex ">
          <tuklogov1 className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left duration-500 mr-2 ${open && "rotate-[360deg]"}`} /> 
          <h1 className={`text-white origin-left font-medium duration-500 text-2xl ${!open && "scale-0"}`}>TUK STMS</h1>
        </div>
<ul className="pt-2">


  {Menus.map((menu, index) => (
  <>
<li key={index} className={`text-gray-300 text-sm flex items-center ${menu.spacing ? "mt-9" : "mt-2"} gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-2`}>
<span className="text-2xl block float-left">
  {menu.icon ? menu.icon : <RxDashboard />}
</span>

  <span className={`text-base duration-500font-medium ${!open && "hidden"} flex-1`}>{menu.title}</span>


</li>



 </>
 ))}

</ul>

      </div>


      <div className="p-7 "><h1 className="font-semibold">homepage</h1></div>
    </div>
  )
}