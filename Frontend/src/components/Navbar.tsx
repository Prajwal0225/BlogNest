import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Navbar(){
    const[image,setImage] = useState("");

    useEffect(()=>{
        const profile = async()=> {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`,{
                headers:{
                    token:token
                }
            })
            setImage(response.data.image);
        }
        profile();
    },[])

    
    return(
        <>
        <div className='flex justify-between items-center py-3 px-5 bg-customGrayLight md:py-5 md:px-5 lg:py-2 lg:px-15'>
            <Link to='/dashboard'>
            <div className="text-2xl font-extrabold text-blue-600 hover:text-blue-500 md:text-4xl">BlogNest</div>
            </Link>
                <div className='flex gap-7 py-0.5'>    
                    <div className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1.5 md:gap-3 md:py-4 lg:py-0 md:text-xl px-2 rounded-xl" >
                        <RateReviewRoundedIcon sx={{ color: 'white' }} />
                        <Link to='/writeblog'>
                        <button className="text-white">Write Blog</button>
                        </Link>
                    </div>
                <div>
                    <Link to='/profile'>
                    <img className="w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full" src={image} />
                    </Link>
                </div>
            </div>
        </div>
        <hr/>
        </>
    )
}