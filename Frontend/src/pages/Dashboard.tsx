import Blogcard from "../components/Blogcard";
import Blogsdivide from "../components/Blogsdivide";
import Navbar from "../components/Navbar";
import Searchbox from "../components/Searchbox";

export default function Dashboard(){
    return (
        <>
        <Navbar/>
        <Searchbox/>
        <Blogsdivide/>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            
        </div>
        </>
    )
}