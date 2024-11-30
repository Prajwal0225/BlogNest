import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Comments from "../components/Comments";
import { Hourglass } from "react-loader-spinner";

// Define the interface for the blog post
interface BlogPost {
  id: number;
  title: string;
  blogimg: string;
  description: string;
}

// Define the interface for the user
interface Blogger {
  id: number;
  username: string;
  profileimg: string;
}
interface User{
  userinfo:{
    id:number;
  }
  image:string
}


export default function Blog(){
  const {id} = useParams();
  const [blogpost, setBlogPost] = useState<BlogPost | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [blogger,setBloger] = useState<Blogger | null>(null);
  const [loading,setLoading] = useState<Boolean>(true);
  
    useEffect(()=>{
         const getData = async() =>{
              const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog?id=${id}`);
              setBlogPost(response.data.blogpost);
              setBloger(response.data.user);
         }
         const profile = async()=> {
          const token = localStorage.getItem("token");
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`,{
              headers:{
                  token:token
              }
          })
          setUser(response.data);
          setLoading(false);
      }
          profile();
         getData();
         
    },[])


    


    return(
       
      <>
      <Navbar/>
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
      <div className=" px-5 py-5 md:px-20 md:py-5 lg:px-[25%] ">
      <div className= "flex justify-center w-[100%]">
      <img className="rounded-xl w-[100%]" src={blogpost?.blogimg}/>
      </div>
      <h1 className="text-white text-3xl font-bold mt-10">{blogpost?.title}</h1>
      <Link to={`/profile/${blogger?.username}`}>
      <span className="text-white flex items-center gap-5 mt-8">

                    <img className="w-14 h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full" src={blogger?.profileimg} />
                    <h1 className="text-xl font-semibold">{blogger?.username}</h1>
                    </span>

                    </Link>
                    
      
      <div style={{ whiteSpace: "pre-wrap" }} className="text-white my-8 text-xl">
      {blogpost?.description}
      </div>
     
                <hr/>
                {blogpost && user && blogpost.id && user.userinfo?.id && user.image && (
          <Comments
            image={user.image}  
            blogpostId={blogpost.id!}  
            userId={user.userinfo.id}  
          />
        )}
      </div>
      </>
      }
</>
    )
}

