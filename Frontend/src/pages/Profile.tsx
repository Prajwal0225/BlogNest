import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";

export default function Profile(){
    const[image,setImage] = useState("");
    const[username,setUsername] = useState("");
    const[bio,setBio] = useState("");
    const[email,setEmail] = useState("");
    const[loading,setLoading] = useState(true);
    
    
    useEffect(()=>{
        const profile = async()=> {
            setLoading(true);
            const token = localStorage.getItem("token");
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`,{
                headers:{
                    token:token
                }
            })
            setImage(response.data.image);
            setUsername(response.data.userinfo.username);
            setBio(response.data.userinfo.bio);
            setEmail(response.data.userinfo.email);
            setLoading(false);
        }
        profile();
    },[]);
    return(
        <>
        <Navbar/>
        {loading? <>
        
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
  </div>:</>:<>
        <div className="p-8 flex h-[100vh] items-center justify-center">
        <div>
            <div className="flex justify-center">
            <img
            className=" w-[50vh] h-[50vh] avatar aspect-square rounded-full mb-10"
            src={image}/>
            </div>
            
            
        <div className="text-white text-xl px-3">
                <div className="text-center">
            <p className="text-3xl font-bold mb-2">{username}</p>
            <br/>
            <p className="text-gray-400 mb-2">{bio}</p>
            <br/>
            <p className="text-gray-500">{email}</p>
            <br/>
            </div>
            </div>
        </div>
        </div>
        </>
}
        </>
    )
}