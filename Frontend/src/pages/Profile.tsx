import Navbar from "../components/Navbar";

export default function Profile(){
    return(
        <>
        <Navbar/>
        <div className="p-8">
        <div className="">
            <img
            className="p-20 avatar aspect-square rounded-full"
            src="https://imgs.search.brave.com/-hXkFG6GVoSLQHeuuamFGSipXjSGbTDs-doqS7mT5WE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYW5v/Zm1hbnkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA2/L0RpYW1vbmQuanBn"/>
            <div className="text-white text-xl px-3">
                <div className="text-center">
            <p className="text-3xl font-bold mb-2">Prajwal Somalkar</p>
            <br/>
            <p className="text-gray-400 mb-2">Passionate about web development and AI. Always learning, always coding</p>
            <br/>
            <p className="text-gray-500">PrajwalSomalkar@gmail.com</p>
            <br/>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}