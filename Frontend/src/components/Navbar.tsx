import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <>
        <div className='flex justify-between items-center py-3 px-5 bg-customGrayLight md:py-5 md:px-5 lg:py-2 lg:px-15'>
            <div className="text-2xl font-extrabold text-blue-600 hover:text-blue-500 md:text-4xl">BlogNest</div>
                <div className='flex gap-7 py-0.5'>    
                    <div className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1.5 md:gap-3 md:py-4 lg:py-0 md:text-xl px-2 rounded-xl" >
                        <RateReviewRoundedIcon sx={{ color: 'white' }} />
                        <Link to='/writeblog'>
                        <button className="text-white">Write Blog</button>
                        </Link>
                    </div>
                <div>
                    <img className=" border border-solid border-white border-2 w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full" src="https://imgs.search.brave.com/-hXkFG6GVoSLQHeuuamFGSipXjSGbTDs-doqS7mT5WE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYW5v/Zm1hbnkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA2/L0RpYW1vbmQuanBn" />
                </div>
            </div>
        </div>
        <hr/>
        </>
    )
}