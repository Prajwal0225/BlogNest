import { Link } from "react-router-dom"

interface blogsdivideinterface{
    focus:string
}
export default function Blogsdivide({focus}:blogsdivideinterface){
let yourblogcolor ="gray"
let allblogcolor = "gray"
focus == "yourblogs" ? yourblogcolor = "blue":allblogcolor ="blue"

    return(
        <>
        <div className="text-white flex justify-center mb-10 mt-10">
            <Link to='/yourblogs'>
            <button className={`bg-${yourblogcolor}-700 px-5 py-2.5 rounded-xl mr-5`}>Your Blogs</button>
            </Link>
            <Link to='/dashboard'>
            <button className={`bg-${allblogcolor}-700 px-5 py-2.5 rounded-xl`}>All Blogs</button>
            </Link>
        </div>
        </>
    )
}