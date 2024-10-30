import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
export default function Yourblogcard(){
    return(
        <>
        
        <div className="text-white m-8 p-5 border bg-customGrayLight rounded-xl hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/20">
            <div className="flex items-center gap-5 font-semibold mb-5">
            <div><img className="w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full" src="https://imgs.search.brave.com/-hXkFG6GVoSLQHeuuamFGSipXjSGbTDs-doqS7mT5WE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYW5v/Zm1hbnkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA2/L0RpYW1vbmQuanBn" /></div>
            </div>
            <div className="text-2xl font-bold mb-3">Lorem Ipsum heading bro</div>
            <div className='mb-5'><img src="https://imgs.search.brave.com/udwI3NY3xZwZpfE0x3FDbbUD6pnzemtD6TJXRG-63m4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGluYXJ5LW1hcmtl/dGluZy1yZXMuY2xv/dWRpbmFyeS5jb20v/aW1hZ2VzL3dfMTAw/MCxjX3NjYWxlL3Yx/NzA4NjQyMTEyL0lt/cG9ydF9JbWFnZXNf/aW5fUmVhY3RfaGVh/ZGVyL0ltcG9ydF9J/bWFnZXNfaW5fUmVh/Y3RfaGVhZGVyLXBu/Zz9faT1BQQ.jpeg" alt="" /></div>
            <div className='flex justify-between'>
            <div>
            <FavoriteBorderRoundedIcon/> <span>120</span>
            </div>
            <div>
            <ChatBubbleOutlineOutlinedIcon/> <span>200</span>
            </div>
            </div>
            
            {/* <FavoriteIcon sx={{color:'red'}}/>       */}
        </div>
        
        

        </>
    )
}