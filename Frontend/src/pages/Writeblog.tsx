import Navbar from "../components/Navbar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UploadIcon from '@mui/icons-material/Upload';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Writeblog(){
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Select Category");
    const [file, setFile] = useState(null);
    const[filename,setFilename] = useState("");
    const [uploadedImageUrl, setUploadedImageUrl] = useState(""); 
    const [blogheading,setBlogHeading] = useState("");
    const [blogpost,setBlogPost]=useState("");
    const [uploadblogpost,setUploadBlogPost] = useState("");
    
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


      const handleFileChange = (e:any) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        if (selectedFile) {
            setFile(selectedFile);
            setFilename(selectedFile.name);
        }
    };


    const handleUpload = async () => {
        if (!file) {
            alert("Please select an image to upload");
            return;
        }

        // Prepare form data for the image upload
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await axios.post(`${backendurl}/upload`,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type for form data
                },
            })

            const result = await response.data;

            if (response.status ==200) {
                setUploadedImageUrl(result.result.secure_url); // Set uploaded image URL
                alert("Image uploaded successfully!");
            } else {
                console.error("Upload failed:", result);
                alert("Failed to upload image. Please try again.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("An error occurred during image upload.");
        }
    };


    

    const handleblogpost =async(published:any)=>{
      try{
      const token = localStorage.getItem("token");
            console.log(token);
            const response = await axios.post(`${backendurl}/writeblog`,{
              blogheading,
              blogpost,
              selectedCategory,
              published,
              uploadedImageUrl
            },{
                headers:{
                    token:token
                }
            })

            if(response.data.message=="Blogpost uploaded successfully"){
              setUploadBlogPost("Blogpost saved to database");
            }
            console.log(response.data);
            navigate('/dashboard');
          }catch(error){
            console.log("Something went wrong");
          }
          }



    return(
        <>
        <Navbar/>
        
<div className="flex flex-col items-center p-5 md:px-20">
    
    <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
    />
    <div className="bg-customGrayLight cursor-pointer flex justify-center items-center w-full h-52 text-3xl font-bold text-white rounded-xl hover:bg-gray-700 transition duration-200">
    <div>
    <label
        htmlFor="file-upload"
        className="cursor-pointer"
    >
      <UploadIcon fontSize="large"/>Choose File
    </label>
    <p id="file-name" className="mt-2 text-gray-500 text-sm text-center">
        {filename ? filename:"No File Choosen"}
    </p>

    </div>
    </div>
     <button
            className="text-white w-full border border-customGrayLight p-2.5 mt-2 bg-gray-500 hover:bg-gray-400 rounded-xl"
            onClick={handleUpload}
        >
        Upload Photo
        </button>
</div>

       



        <div className="p-5 md:px-20">
            <div>
                <input 
                onChange={(e)=>setBlogHeading(e.target.value)}
                className="bg-customGrayLight w-full p-3 my-5 font-bold placeholder:text-white-400 placeholder:text-xl bg-white-400 rounded-xl text-white text-xl focus:border-purple-400 transition-all duration-500 shadow-lg focus:shadow-purple-400/20" 
                placeholder="Enter your blog title"/>
            </div>
            <div className="w-full h-[40vh]">
                <textarea 
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