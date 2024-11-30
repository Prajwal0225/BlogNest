import { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import Blogsdivide from "../components/Blogsdivide";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";

interface BlogInfo {
    likes: number;
    comments: number;
  }
  
  interface BlogPost {
    id: number;
    title: string;
    blogimg: string;
    blogpostinfo: BlogInfo[];
  }
  
  interface Blog {
    profileimg: string;
    blogpost: BlogPost[];
  }
  
 

export default function Dashboard(){
    const [blogpost, setBlogPosts] = useState<Blog[] | null>(null);
    const [loading,setLoading] = useState<Boolean>(true);
    
    useEffect(()=>{
        const blogs = async()=> {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/allblogpost`)
            setBlogPosts(response.data.allblogsinfo);
            setLoading(false);
        }
        blogs();
    },[])

    return (
        <>
        <Navbar/>
        <Blogsdivide focus="allblogs"/>
        {loading ? 
        <div className="w-full h-[100vh] flex items-center justify-center">
<Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  /> 
  </div>:<>
        
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
}
        </>
    )
}