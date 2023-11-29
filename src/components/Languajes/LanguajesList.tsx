import LanguajeItem from "./LanguajeItem"

function LanguajesList({ languajes }:any) {
  return (
    <>
      <div className="text-center mb-20">
        <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Languajes</h1>
        <div className="flex mt-6 justify-center">
          <div className="w-80 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className="">
        <div className="columns-3">
          <div className="">
          {languajes.map((item : any) => (
            <LanguajeItem key={item.id} languaje={item} />
          ))}
            </div>
        </div>
      </div>
        
    </>
  )
}

export default LanguajesList
