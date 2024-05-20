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




  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">

    
  </div>

  </div>
</nav>
)
}