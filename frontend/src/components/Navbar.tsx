import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NavBar(){
    const navigate = useNavigate()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const username = localStorage.getItem('name')
    const email = localStorage.getItem('email')
return(
<nav className="bg-white border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-1 p-4">
  <a href="" onClick={()=>{
    navigate('/blogs')
  }} className="flex items-center space-x-3 rtl:space-x-reverse ">
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716176410693/e404bd68-5966-4357-b769-748080d41051.png" className="w-9" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap ">Minimalist Blogs</span>
  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

<div className="relative">

<img 
        id="avatarButton" 
        typeof="button" 
        onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
        className="w-12 h-12 border border-black p-1 rounded-full cursor-pointer" 
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/599e3b95636919.5eb96c0445ea7.jpg" 
        alt="User dropdown"
      />

<div id="userDropdown" className={`z-10 ${dropdownOpen? '': "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}>
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{username}</div>
      <div className="font-medium truncate">{email}</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        navigate('/signin')
      }}>Sign out</a>
    </div>
</div>


      </div>

      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-user" aria-expanded="false">

        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <button type="button" className=" relative right-52 mt-2 focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " onClick={()=>{
  navigate('/create')
}}>Create New +</button>

  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">

    
  </div>

  </div>
</nav>
)
}