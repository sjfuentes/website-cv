function GridTitle({ grid_title } : any) {
  return (
    <>
    <div className="text-center sm:mb-10 md:mb-12 lg:mb-15 mb-10">
      <h1 className="mb-2 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl sm:mb-2 md:mb-3 lg:mb-4">{grid_title}</h1>
      <div className="sm:w-40 md:w-50 lg:w-60 w-40 h-1 rounded-full bg-indigo-500 inline-flex"/>
    </div>
    </>
  )
}

export default GridTitle
