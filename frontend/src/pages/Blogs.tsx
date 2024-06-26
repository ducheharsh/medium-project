import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "../components/Blog";

import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useNavigate } from "react-router-dom";

export function useFetchBlog() {
  const [Blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://backend.ducheharsh.workers.dev/api/v1/blog/bulk", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      });
  }, []);
  return { Blogs, loading };
}

export function Blogs() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const { Blogs, loading } = useFetchBlog();

  console.log(Blogs);
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center pt-5 px-4">
        <BlogsSkeleton />
        <BlogsSkeleton />
        <BlogsSkeleton />
        <BlogsSkeleton />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse justify-center items-center pt-5 px-4 min-w-full">
        {Blogs.map((blog: any) => (
          <Blog
            key={blog.id}
            authorName={blog.author.name}
            id={blog.id}
            createdAt={blog.createdAt}
            title={blog.title}
            content={blog.content}
            likedBy={blog.likedBy}
          />
        ))}
      </div>
    );
  }
}
