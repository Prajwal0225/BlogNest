import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Profile(){
    const[image,setImage] = useState("");
    const[username,setUsername] = useState("");
    const[bio,setBio] = useState("");
    const[email,setEmail] = useState("");
    
    
    useEffect(()=>{
        const profile = async()=> {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`,{
                headers:{
                    token:token
                }
            })
            console.log("I am profile");
            setImage(response.data.image);
            setUsername(response.data.userinfo.username);
            setBio(response.data.userinfo.bio);
            setEmail(response.data.userinfo.email);
        }
        profile();
    },[]);
    return(
        <>
        <Navbar/>
        <div className="p-8">
        <div>
            <div className="flex justify-center">
            <img
            className="md:w-1/4 md:h-1/4 avatar aspect-square rounded-full mb-10"
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
    )
}