import { Link } from "react-router-dom"

interface Formbottominterface{
    discription:string,
    redirect:string
}
export default function Formbottom({discription,redirect}:Formbottominterface){
    return(
        <>
        <p className="text-white mt-3 text-center">{discription}<Link to={`/${redirect}`}> <span className="text-blue-500 cursor-pointer underline">{redirect}</span></Link></p>
        </>
    )
}