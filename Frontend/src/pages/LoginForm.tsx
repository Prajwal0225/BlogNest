import { useState } from "react";
import Formbottom from "../components/Forms/Formbottom";
import Formbox from "../components/Forms/Formbox";
import Formbutton from "../components/Forms/Formbutton";
import FormHeading from "../components/Forms/Formheading";
import InputField from "../components/Forms/InputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm(){
const[username,setUsername] = useState("");
const[password,setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async() =>{
        console.log(username);
        console.log(password);
        const user = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
            {
            username,
            password
        })
        localStorage.setItem('token',user.data.token);
        navigate('/dashboard');
    }

    return(
        <>
        <Formbox>
        <FormHeading
        heading="Login For BlogNest"/>

        <InputField
        type="text"
        onChange={(e:any)=>setUsername(e.target.value)}
        inputheading="Username"
        inputplaceholder="Enter your username"/>
        <br/><br/>
        <InputField
        type="password"
        onChange={(e:any)=>setPassword(e.target.value)}
        inputheading="Password"
        inputplaceholder="Enter your password"/>

        <Formbutton onClick={handleLogin} btnheading="Login"/>
        
        <Formbottom
        discription="Don't have account ?"
        redirect="Signin"/>
        </Formbox>
        </>
    )
}