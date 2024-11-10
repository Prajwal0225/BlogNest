import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';



                   interface Blogcardinterface{
                    id:number
                        blogerimg:string                        
                        blogtitle:string 
                        blogimg:string                        
                        like:number 
                        comments :number 
                    }
export default function Blogcard({id,blogerimg,blogtitle,blogimg,like,comments}:Blogcardinterface){
    const [isLike, setIsLike] = useState(false);
    const [likeCount, setLikeCount] = useState(like);
    const token = localStorage.getItem("token");

    const handleLikebtn = async() => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/like?id=${id}`,
                {},
                {
                    headers: {  
                        token: token
                    }
                }
            );
            console.log(response);
            if(response.data.message === "like successful") {
                setIsLike(true);
                setLikeCount(prev => prev + 1);
            } else if(response.data.message === "unlike successful") {
                setIsLike(false);
                setLikeCount(prev => prev - 1);
            }
        } catch (error) {
            console.error("Error handling like:", error);
        }
    }

    useEffect(() => {
        const checkLikeStatus = async() => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/checklike?id=${id}`,{
                    headers:{
                        token:token
                    }
                }
            );
                setIsLike(response.data.isLiked);
            } catch (error) {
                console.error("Error checking like status:", error);
            }
        };
        checkLikeStatus();
    }, [id]);



    return (
        <div className="text-white m-8 p-5 border bg-customGrayLight rounded-xl hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/20">
            <Link to={`/blog/${id}`}>
                <div className="flex items-center gap-5 font-semibold mb-5">
                    <div>
                        <img className="w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full" src={blogerimg} />
                    </div>
                </div>
                <div className="text-2xl font-bold mb-3">{blogtitle}</div>
                <div className='mb-5'><img src={blogimg} alt="" /></div>
            </Link>
            <div className='flex justify-between'>
                <div>
                    <button onClick={handleLikebtn} disabled={false}>   
                        {isLike ? <FavoriteIcon sx={{color: 'red'}}/> : <FavoriteBorderRoundedIcon/>}
                    </button>
                    <span>{likeCount}</span>
                </div>
                <div>
                    <ChatBubbleOutlineOutlinedIcon/> <span>{comments}</span>
                </div>
            </div>
        </div>
    );
}