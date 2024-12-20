import axios from "axios"
import { Link } from "react-router-dom"

interface yourblogcardinterface{
    type:string
    blogpostid:number
    title:string 
    img:string
}


export default function Yourblogcard({blogpostid, title,type,img}:yourblogcardinterface){
    const handlePublish=async()=>{
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/publish?id=${blogpostid}`,{})
        window.location.reload();
}

    const handleDelete= async() =>{
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/deleteblog?id=${blogpostid}`,{})
        window.location.reload();
    }

 

    return(
        <>

        <div className="text-white m-8 p-5 border bg-customGrayLight rounded-xl hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/20">
        <Link to={`/yourblog/${blogpostid}`}>
        <div>
            <div className="text-xl cursor-pointer font-bold mb-3 line-clamp-2 min-h-[3.5rem]">{title}</div>
            <div className='mb-5'><img className="rounded-xl" src={img} alt="" /></div>
            {type == "published" ? <button className={`bg-green-600 px-2 py-1 rounded-full mb-5`}>{type}</button>: <button className={`bg-yellow-600 px-2 py-1 rounded-full mb-5`}>{type}</button>}
            </div>
            </Link>
            <br/>
            {type=="published" ? <button disabled className="w-full bg-gray-600 px-5 py-3 rounded font-bold">Published</button>:<button onClick={handlePublish} className="w-full bg-blue-700 px-5 py-3 rounded font-bold cursor-pointer hover:bg-blue-800">Publish Now</button>}
            <button onClick={handleDelete} className="w-full bg-orange-700 px-5 py-3 rounded font-bold mt-4">Delete BlogPost</button>
        </div>
        
        

        </>
    )
}