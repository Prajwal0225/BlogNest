import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Yourblog(){
    const {id} = useParams();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Select Category");
    const [blogheading,setBlogHeading] = useState("");
    const [blogpost,setBlogPost]=useState("");
    const [uploadblogpost,setUploadBlogPost] = useState("");
    const [blogimage,setBlogImage] = useState("");
    const navigate = useNavigate();
    
    
    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const open = Boolean(anchorEl);
  


    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleCategorySelect = (category:string) => {
        setSelectedCategory(category); 
        handleClose(); 
      };


    const handleblogpost =async(published:any)=>{
      try{
      const token = localStorage.getItem("token");
            const response = await axios.put(`${backendurl}/editblog?id=${id}`,{
              id,
              blogheading,
              blogpost,
              selectedCategory,
              published
            },{
                headers:{
                    token:token
                }
            })

            if(response.data.message=="Blogpost edit successfully"){
              setUploadBlogPost("Blogpost saved to database");
            }
            navigate('/yourblogs');
          }catch(error){
            console.log("Something went wrong",error);
          }
          }


    
    useEffect(()=>{
        const getData = async() =>{
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog?id=${id}`);
            setBlogPost(response.data.blogpost.description);
            setBlogHeading(response.data.blogpost.title);
            setBlogImage(response.data.blogpost.blogimg);
            setSelectedCategory(response.data.blogpost.category);
       }
       getData();
    },[])


    
    return(
        
        

<>
<Navbar/>
  <div className=" px-5 py-5 md:px-20 md:py-5 lg:px-[25%] ">
      <div className= "flex justify-center w-[100%]">
      <img className="rounded-xl w-[100%]" src={blogimage}/>
      </div>
      </div>
    


        <div className="p-5 md:px-20 md:py-5 lg:px-[25%]">
            <div>
                <input 
                value={blogheading}
                onChange={(e)=>setBlogHeading(e.target.value)}
                className="bg-customGrayLight w-full p-3 my-5 font-bold placeholder:text-white-400 placeholder:text-xl bg-white-400 rounded-xl text-white text-xl focus:border-purple-400 transition-all duration-500 shadow-lg focus:shadow-purple-400/20" 
                placeholder="Enter your blog title"/>
            </div>
            <div className="w-full h-[40vh]">
                <textarea 
                value={blogpost}
                onChange={(e)=>setBlogPost(e.target.value)}
                className="placeholder:text-white-400 text-white placeholder:font-bold bg-customGrayLight text-xl w-full h-full rounded-xl py-3 px-3 focus:border-purple-400 transition-all duration-500 shadow-lg  focus:shadow-purple-400/20" 
                placeholder="Write blog..."/>
            </div>



<div className="lg:flex lg:justify-between">
            <div>
      <div
        className="bg-gray-700 py-4 px-2 rounded-xl mt-8 flex justify-between items-center cursor-pointer hover:bg-gray-800 lg:w-full"
        onClick={handleClick}
      >
        <div className="text-white font-semibold">
          {selectedCategory} 
        </div>
        <ArrowDropDownIcon sx={{ color: 'white' }} />
      </div>

      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{
          paper: 'bg-gray-700 mt-2 rounded-lg', 
        }}
      >
        
        {[
          'Technology & Innovation',
          'Health & Wellness',
          'Lifestyle & Personal Development',
          'Business & Finance',
          'Travel & Adventure',
          'Education & Learning',
          'Food & Cooking',
          'Science & Environment',
          'Entertainment & Pop Culture',
          'Fashion & Beauty',
        ].map((category) => (
          <MenuItem
          value={selectedCategory}
            key={category}
            onClick={() => handleCategorySelect(category)} 
            className="text-white hover:bg-gray-600"
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>

    <div className="text-white mt-8 flex justify-center gap-5">
        <button onClick= {()=>handleblogpost(false)} className="bg-gray-700 hover:bg-gray-800 py-4 px-2 rounded-xl font-bold">Save as draft</button>
        <button onClick={()=>handleblogpost(true)} className="bg-green-600 hover:bg-green-700 py-4 px-2 rounded-xl font-bold">Published</button>
    </div>
    

    {uploadblogpost ? uploadblogpost:""}
        </div>
        </div>
        </>
    )
}