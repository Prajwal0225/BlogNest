import { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import Blogsdivide from "../components/Blogsdivide";
import Navbar from "../components/Navbar";
import axios from "axios";


export default function Dashboard(){
    const [blogpost, setBlogPosts] = useState();

    useEffect(()=>{
        const blogs = async()=> {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/allblogpost`)
            setBlogPosts(response.data.allblogsinfo);
        }
        blogs();
    },[])

    return (
        <>
        <Navbar/>
        
        <Blogsdivide focus="allblogs"/>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
            
        {blogpost ? blogpost.map((blog: any) => (
    blog.blogpost.map((post: any) => (
        post.blogpostinfo.map((info: any) => (
            <Blogcard
                key={post.id} 
                id={post.id}
                blogerimg={blog.profileimg} 
                blogtitle={post.title} 
                blogimg={post.blogimg} 
                like={info.likes} 
                comments={info.comments} 
            />
        ))
    ))
)) : ""}      
        </div>
        </>
    )
}