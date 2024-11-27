import { useState } from "react";
import Formbox from "../components/Forms/Formbox";
import FormHeading from "../components/Forms/Formheading";
import InputField from "../components/Forms/InputField";
import Formbutton from "../components/Forms/Formbutton";
import Formbottom from "../components/Forms/Formbottom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SigninForm(){
    const[username,setUsername] = useState("");
    const[bio,setBio] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[passwordConfirm,setPasswordConfirm]= useState("");
    const [file, setFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(""); 
    const [invalidinput,setInvalidInput] = useState("");
    const navigate = useNavigate();



    const backendurl = import.meta.env.VITE_BACKEND_URL;


    const handleSignin = async() =>{
        if(username == "" || bio == "" || email == "" || password == "" || password == "" || passwordConfirm == "" || uploadedImageUrl==""){
            setInvalidInput("All filds are required to signin");
            return;
        }
        if(password != passwordConfirm){
            setInvalidInput("Password and confirm passwords are not matching try again");
            return;
        }
        const response = await axios.put(`${backendurl}/signin`,{
            username,
            bio,
            email,
            password,
            uploadedImageUrl
        })
        if(response.data.message=="User already exist use different username"){
            setInvalidInput("Username is already taken use different username.");
            return;
        }else if(response.data.message == "Email already associated with an account"){
            setInvalidInput("This email is already associated with an account.");
            return;
        }

        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        navigate('/dashboard')
    }



    const handleFileChange = (e:any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };


    const getTransformedUrl = (url:string, width:number, height:number) => {
        // Check if the URL contains the "/upload/" segment
        const uploadIndex = url.indexOf("/upload/");
        if (uploadIndex === -1) return url; // Return original URL if "/upload/" is not found
    
        // Insert the width and height transformation right after "/upload/"
        const transformedUrl = `${url.slice(0, uploadIndex + 8)}w_${width},h_${height}/${url.slice(uploadIndex + 8)}`;
        return transformedUrl;
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
                const url = getTransformedUrl(result.result.secure_url,600,600)
                setUploadedImageUrl(url); // Set uploaded image URL
                console.log("newurl",uploadedImageUrl);
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

    
    return (
        <>
        
        <Formbox>
        
        <FormHeading
        heading="Signin For BlogNest"/>

        <InputField
        type="text"
        onChange={(e:any)=>setUsername(e.target.value)}
        inputheading="Username"
        inputplaceholder="Enter your username"/>

        <InputField
        type="text"
        onChange={(e:any)=>setBio(e.target.value)}
        inputheading="Bio"
        inputplaceholder="Tell us about yourself"/>

        <InputField
        type="text"
        onChange={(e:any)=>setEmail(e.target.value)}
        inputheading="Email"
        inputplaceholder="Enter your email"/>


        <InputField
        type="password"
        onChange={(e:any)=>setPassword(e.target.value)}
        inputheading="Password"
        inputplaceholder="Create a password"/>

        <InputField
        type="password"
        onChange={(e:any)=>setPasswordConfirm(e.target.value)}
        inputheading="Confirm password"
        inputplaceholder="Confirm your password"/>

       
        <label className="text-white font-bold">Profile Photo</label>
        <br/>
        <input
            type="file"
            accept="image/*"
            className="text-white w-full border border-customGrayLight p-2.5 mt-2 bg-customGrayLight rounded-xl"
            onChange={handleFileChange}
        />
        <button
            className="text-white w-full border border-customGrayLight p-2.5 mt-2 bg-customGrayLight rounded-xl"
            onClick={handleUpload}
        >
        Upload Photo
        </button>

        {uploadedImageUrl && (
            <div className="flex justify-center">
            <img
                src={uploadedImageUrl}
                alt="Uploaded profile"
                className="mt-4 w-24 h-24 rounded-full object-cover"
            />
            </div>
        )}

        <p className="text-xl text-red-500 font-bold text-center">{invalidinput}</p>

        <Formbutton onClick={handleSignin}
            btnheading="Sign in"/>


    <Formbottom
        discription="Already have an account"
        redirect="Login"/>


    </Formbox>
    
        </>
    )
}