export default function Formbox({children}:any){
    return(
        <div className="h-[110vh] flex justify-center align-middle items-center">
        <div className="pl-6 pr-6 pb-5 bg-customGray ml-2.5 mr-2.5 mt-3 mb-3 rounded-xl border border-white lg:w-1/4">
        {children}
        </div>
        </div>
    )
}