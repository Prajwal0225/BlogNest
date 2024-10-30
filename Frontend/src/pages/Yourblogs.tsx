import Blogsdivide from "../components/Blogsdivide";
import Navbar from "../components/Navbar";
import Searchbox from "../components/Searchbox";
import Yourblogcard from "../components/Yourblogcard";

export default function Yourblogs(){
    return(
        <>
        <Navbar/>
        <Blogsdivide focus="yourblogs"/>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
            <Yourblogcard
            type="published"/>
            <Yourblogcard
            type="draft"/>
            <Yourblogcard
            type="published"/>
            <Yourblogcard
            type="published"/>
            <Yourblogcard
            type="draft"/>
            <Yourblogcard
            type="draft"/>
            <Yourblogcard
            type="published"/>
            <Yourblogcard
            type="published"/>
            <Yourblogcard
            type="published"/>
            <Yourblogcard
            type="published"/>
            
        </div>
        </>
    )
}