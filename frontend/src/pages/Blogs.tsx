import axios from "axios"
import { useEffect, useState } from "react"
import { Blog } from "../components/Blog"
import { blogType } from "@harsh_duche/mediumtypes"

export function useFetchBlog(){
    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("https://backend.ducheharsh.workers.dev/api/v1/blog/bulk",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }
        )
        .then((res) => {
            setBlogs(res.data)
        })
    }, [])
    return Blogs
}

export function Blogs(){
    console.log("Blogs")
    const Blogs = useFetchBlog()
    console.log(Blogs)
    return <div className="px-36">
        {Blogs.map((blog:any) => <Blog authorName={blog.author.name} id={blog.id} createdAt={blog.createdAt} title={blog.title} content={blog.content}/>) }
    </div>
}