import Formbottom from "../components/Formbottom";
import Formbox from "../components/Formbox";
import Formbutton from "../components/Formbutton";
import FormHeading from "../components/Formheading";
import InputField from "../components/InputField";

export default function LoginForm(){
    return(
        <>
        <Formbox>
        <FormHeading
        heading="Login For BlogNest"/>

        <InputField
        inputheading="Username"
        inputplaceholder="Enter your username"/>
        <br/><br/>
        <InputField
        inputheading="Password"
        inputplaceholder="Enter your password"/>

        <Formbutton btnheading="Login"/>
        <Formbottom
        discription="Don't have account ?"
        redirect="Sign Up"/>
        </Formbox>
        </>
    )
}