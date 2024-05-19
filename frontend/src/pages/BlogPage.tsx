import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Blog } from "../components/Blog"

interface BlogType {
    id?: number;
    createdAt?: string;
    title?: string;
    content?: string;
    author?: {
      name?: string;
    };
  }

export function BlogPage(){


    const {id} = useParams()
    const [blog, setBlog] = useState<BlogType>({})
    useEffect(() => {
        try{
        axios.get(`https://backend.ducheharsh.workers.dev/api/v1/blog/${id}`, {
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then((res) => {
            setBlog(res.data)
        })
    }catch(err){
        console.log(err)
    }
    },[])
 
    const date = new Date(blog.createdAt || "")
    console.log(blog.author?.name)
    return <div className="grid grid-cols-3 ]">
        <div className="col-span-2 p-24 mt-6">
       <h1 className="text-6xl font-extrabold max-w-2/3">{blog.title}</h1>
       <h4 className="text-lg mt-5 font-semibold text-slate-500">Posted on {date.toDateString()}</h4>
       <div className="mt-4 w-auto text-justify text-slate-700 text-2xl font-times-light whitespace-pre-line" >{blog.content}</div>
       </div>

       <div className="col-span-1">
       <div className="p-24 mt-6 ">
        <h1 className="font-semibold"> Author</h1>
        <div>

        <div className="flex mt-3">
        <div className="relative mt-3 inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
    <span className="font-medium text-gray-600 ">{blog.author?.name ? blog.author.name[0]: "J"}</span>
    </div>
    <div>       
         <h3 className="ml-4 font-extrabold text-xl">{blog.author? blog.author.name: "John Doe"}</h3>
         <h4 className="ml-4 mt-2 font-semibold text-slate-500">A Medium wala author just exploring clones </h4>
    </div>
        </div>
        


        </div>
        </div>
  
       </div>
    </div>

}