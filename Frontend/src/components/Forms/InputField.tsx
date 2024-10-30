interface inputfields  {
    inputheading:string,
    inputplaceholder:string
}

export default function InputField({inputheading,inputplaceholder}:inputfields){
    return (
        <> 
            <label className="text-white font-bold">{inputheading}</label>
            <br/>
            <input className="text-white w-full border border-customGrayLight p-2.5 mt-2 mb-3 bg-customGrayLight rounded-xl" placeholder={inputplaceholder}/>
            
        </>
    )
}