
export default function Formbutton({btnheading,onClick}:any){
    return (
        <>
        
        <button onClick={onClick} className="bg-blue-500 w-full p-2.5 rounded-xl text-white font-bold mt-10">{btnheading}</button>
        
        </>
    )
} 