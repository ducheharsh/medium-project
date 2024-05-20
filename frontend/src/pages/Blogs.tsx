import axios from "axios"
import { useEffect, useState } from "react"
import { Blog } from "../components/Blog"
import { blogType } from "@harsh_duche/mediumtypes"
import { BlogsSkeleton } from "../components/BlogsSkeleton"

export function useFetchBlog(){
    const [Blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://backend.ducheharsh.workers.dev/api/v1/blog/bulk",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }
        )
        .then((res) => {
            setBlogs(res.data)
            setLoading(false)
        })
    }, [])
    return {Blogs, loading}
}

export function Blogs(){
    console.log("Blogs")
    const {Blogs, loading} = useFetchBlog()
    console.log(Blogs)
    
    if(loading){
        return <div className="px-36 pt-5"><BlogsSkeleton/><BlogsSkeleton/><BlogsSkeleton/><BlogsSkeleton/></div>
    }else{
    return <div className="px-36 pt-5">
        {Blogs.map((blog:any) => <Blog authorName={blog.author.name} id={blog.id} createdAt={blog.createdAt} title={blog.title} content={blog.content}/>) }
    </div>
    }
}