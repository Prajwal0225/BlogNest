import Navbar from "../components/Navbar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UploadIcon from '@mui/icons-material/Upload';
import { useState } from "react";

export default function Writeblog(){
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Select Category");
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

    return(
        <>
        <Navbar/>
        <div className="p-5 md:px-20">
            <div className="bg-gray-500 w-full h-52 text-3xl font-bold flex items-center justify-center text-white rounded-xl">
                <UploadIcon fontSize="large"/>
                Upload Image
            </div>

            <div>
                <input className=" bg-gray-500 w-full p-3 my-5 font-bold placeholder:text-white-400 placeholder:text-xl bg-white-400 rounded-xl text-white text-xl focus:border-purple-400 transition-all duration-500 shadow-lg focus:shadow-purple-400/20" placeholder="Enter your blog title"/>
            </div>
            <div className="w-full h-[40vh]">
                <textarea className="placeholder:text-white-400 text-white placeholder:font-bold bg-gray-500 text-xl w-full h-full rounded-xl py-3 px-3 focus:border-purple-400 transition-all duration-500 shadow-lg  focus:shadow-purple-400/20" placeholder="Write blog..."/>
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
        <button className="bg-gray-700 hover:bg-gray-800 py-4 px-2 rounded-xl font-bold">Save as draft</button>
        <button className="bg-green-600 hover:bg-green-700 py-4 px-2 rounded-xl font-bold">Published</button>
    </div>



        </div>
        </div>
        </>
    )
}