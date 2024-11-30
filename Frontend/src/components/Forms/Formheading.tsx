interface Formheadinginterface{
    heading:string
}
export default function FormHeading({heading}:Formheadinginterface){
    return (
        <>
        <h1 className="text-center text-white text-3xl font-bold mt-10 mb-5">{heading}</h1>
        </>
    )
}