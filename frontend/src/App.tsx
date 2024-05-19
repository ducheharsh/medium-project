
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { BlogPage } from './pages/BlogPage'
import { CreateBlog } from './pages/CreateBlog'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/:id' element={<BlogPage/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
