import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Comments from "../components/Comments";

// Define the interface for the blog post
interface BlogPost {
  id: number;
  title: string;
  blogimg: string;
  description: string;
}

// Define the interface for the user
interface User {
  id: number;
  username: string;
  profileimg: string;
}


export default function Blog(){
  const {id} = useParams();
const [blogpost, setBlogPost] = useState<BlogPost | null>(null);
const [user, setUser] = useState<User | null>(null);

  
    useEffect(()=>{
         const getData = async() =>{
              const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog?id=${id}`);
              setBlogPost(response.data.blogpost);
              setUser(response.data.user);
         }
         getData();
    },[])

    


    return(
       
      <>
      <Navbar/>
      <div className=" px-5 py-5 md:px-20 md:py-5 lg:px-[25%] ">
      <div className= "flex justify-center w-[100%]">
      <img className="rounded-xl w-[100%]" src={blogpost?.blogimg}/>
      </div>
      <h1 className="text-white text-3xl font-bold mt-10">{blogpost?.title}</h1>
      <span className="text-white flex items-center gap-5 mt-8">
      <Link to='/profile'>
                    <img className="w-8 h-8 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full" src={user?.profileimg} />
                    </Link>
                    <h1 className="text-xl font-semibold">{user?.username}</h1>
                    </span>
      
      <div className="text-white my-8 text-xl">
      {blogpost?.description}
      </div>
     
                <hr/>
                {blogpost && user && blogpost.id && user.id && user.profileimg && (
          <Comments
            image={user.profileimg!}  
            blogpostId={blogpost.id!}  
            userId={user.id!}  
          />
        )}
     
      

      </div>
</>
    )
}

