
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { BlogPage } from './pages/BlogPage'
import { CreateBlog } from './pages/CreateBlog'
import { NavBar } from './components/Navbar'



function App() {
 
  return (
    <>

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        
      </Routes>

      
      <Routes>
      <Route path='/blogs' element={<>
      <NavBar/>
      <Blogs/>
      </>}/>
        <Route path='/blogs/:id' element={<>
        <NavBar/>
        <BlogPage/>
        </>}/>
        <Route path='/create' element={<CreateBlog/>}/>
      </Routes>

    </BrowserRouter>
   
 </>
  )
}


export default App
