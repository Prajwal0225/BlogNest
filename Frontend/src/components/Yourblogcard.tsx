interface yourblogcardinterface{
    type:string
}
export default function Yourblogcard({type}:yourblogcardinterface){
    let c:string = "";
    if(type == "published"){
        c = "green"
    }else{
        c = "yellow"
    }
    return(
        <>
        
        <div className="text-white m-8 p-5 border bg-customGrayLight rounded-xl hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/20">
            <div className="text-2xl font-bold mb-3">Lorem Ipsum heading bro</div>
            <div className='mb-5'><img src="https://imgs.search.brave.com/udwI3NY3xZwZpfE0x3FDbbUD6pnzemtD6TJXRG-63m4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGluYXJ5LW1hcmtl/dGluZy1yZXMuY2xv/dWRpbmFyeS5jb20v/aW1hZ2VzL3dfMTAw/MCxjX3NjYWxlL3Yx/NzA4NjQyMTEyL0lt/cG9ydF9JbWFnZXNf/aW5fUmVhY3RfaGVh/ZGVyL0ltcG9ydF9J/bWFnZXNfaW5fUmVh/Y3RfaGVhZGVyLXBu/Zz9faT1BQQ.jpeg" alt="" /></div>
            
            <button className={`bg-${c}-600 px-2 py-1 rounded-full mb-5`}>{type}</button>
            <br/>
            {type=="published" ? <button className="w-full bg-gray-600 px-5 py-3 rounded font-bold">Published</button>:<button className="w-full bg-blue-700 px-5 py-3 rounded font-bold cursor-pointer hover:bg-blue-800">Publish Now</button>}
            
            {/* <FavoriteIcon sx={{color:'red'}}/>       */}
        </div>
        
        

        </>
    )
}