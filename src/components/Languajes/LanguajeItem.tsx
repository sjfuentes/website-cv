function LanguajeItem({ languaje }: any) {
  return (
    <>
      
        <h2 className=" text-xl title-font font-medium mb-3">{languaje.languaje}</h2>
        <p className="leading-relaxed text-sm text-justify">{languaje.level}</p>
    </>
  )
}

export default LanguajeItem
