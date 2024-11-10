//@ts-ignore
import { useEffect, useState } from "react";
import Blogsdivide from "../components/Blogsdivide";
import Navbar from "../components/Navbar";
import Yourblogcard from "../components/Yourblogcard";
import axios from "axios";

interface Blog {
    id: number;
    title: string;
    blogimg: string;
    publish: boolean;
  }


export default function Yourblogs(){
    const [blogpost, setBlogPosts] = useState<Blog[]|null>(null);

    useEffect(()=>{
        const token = localStorage.getItem("token");
        const blogs = async()=> {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/yourblogs`,{
                headers:{
                    token:token
                }
            })
            setBlogPosts(response.data.blogpost);
        }
        blogs();
        console.log(blogpost);
    },[])


    return(
        <>
        <Navbar/>
        <Blogsdivide focus="yourblogs"/>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
        
        {blogpost? blogpost.map((blog:any) => (
                    <Yourblogcard
                        key={blog.id}
                        blogpostid = {blog.id} 
                        title={blog.title} 
                        type={blog.publish ? "published" : "draft"} 
                        img={blog.blogimg}                   
                    />
                )):""}
            
           
            
        </div>
        </>
    )
}