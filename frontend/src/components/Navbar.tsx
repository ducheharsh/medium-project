import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function NavBar(){
    const navigate = useNavigate()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const username = localStorage.getItem('name')
    const email = localStorage.getItem('email')
return(
<nav className="bg-white border-gray-200 border-b-2">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-1 p-4">
  <a href="" onClick={()=>{
    navigate('/blogs')
  }} className="flex items-center space-x-3 rtl:space-x-reverse ">
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1716176410693/e404bd68-5966-4357-b769-748080d41051.png" className="w-9" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap ">Minimalist Blogs</span>
  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

<div className="relative flex">
<button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold rounded-lg text-sm px-5 py-1.5 me-2 hidden md:block " onClick={()=>{
  navigate('/create')
}
}>Create One +</button>

<svg onClick={()=>{
  navigate('/create')
}
} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block md:hidden w-9 h-9 mt-1 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

<img 
        id="avatarButton" 
        typeof="button" 
        onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
        className="w-10 h-10 md:w-12 md:h-12 border border-black p-1 rounded-full cursor-pointer" 
        src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${username}`}
        alt="User dropdown"
      />

<div id="userDropdown" className={`z-10 ${dropdownOpen? '': "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-14 right-2`}>
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