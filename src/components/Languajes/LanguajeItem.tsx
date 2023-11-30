function LanguajeItem({ languaje }: any) {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 rounded-lg shadow-md md:shadow-md lg:shadow-lg hover:shadow-gray-800">
        <h2 className="p-4 text-xl title-font font-medium text-center">{languaje.languaje}</h2>
        <div className="p-4 text-lg font-medium text-center">{languaje.level}</div>
      </div>
    </>
  )
}

export default LanguajeItem
