import { useState } from "react";
import Formbox from "../components/Formbox";
import FormHeading from "../components/Formheading";
import InputField from "../components/InputField";
import Formbutton from "../components/Formbutton";
import Formbottom from "../components/Formbottom";

export default function SigninForm(){
    const [file,setFile]:any = useState();
    
    function handleChange(e:any){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
        
        <Formbox>
        
        <FormHeading
        heading="Signin For BlogNest"/>

        <InputField
        inputheading="Username"
        inputplaceholder="Enter your username"/>

        <InputField
        inputheading="Bio"
        inputplaceholder="Tell us about yourself"/>

        <InputField
        inputheading="Email"
        inputplaceholder="Enter your email"/>


        <InputField
        inputheading="Password"
        inputplaceholder="Create a password"/>

        <InputField
        inputheading="Confirm password"
        inputplaceholder="Confirm your password"/>

<label className="text-white font-bold">Profile Photo</label>
<br/>
<button className="text-white w-full border border-customGrayLight p-2.5 mt-2 bg-customGrayLight rounded-xl">Uploda Photo</button>

<Formbutton 
btnheading="Sign in"/>


<Formbottom
discription="Already have an account"
redirect="Login"/>
       
        {/* <input type="file" placeholder="Upload Image" onChange={handleChange}/>
        <img src={file}/> */}
        </Formbox>
    
        </>
    )
}