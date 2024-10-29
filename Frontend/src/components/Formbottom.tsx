interface Formbottominterface{
    discription:string,
    redirect:string
}
export default function Formbottom({discription,redirect}:Formbottominterface){
    return(
        <>
        <p className="text-white mt-3 text-center">{discription} <span className="text-blue-500 cursor-pointer underline">{redirect}</span></p>
        </>
    )
}