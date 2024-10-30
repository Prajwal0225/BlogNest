import Formbottom from "../components/Forms/Formbottom";
import Formbox from "../components/Forms/Formbox";
import Formbutton from "../components/Forms/Formbutton";
import FormHeading from "../components/Forms/Formheading";
import InputField from "../components/Forms/InputField";

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
        redirect="Signin"/>
        </Formbox>
        </>
    )
}