function EducationItem({ studie }: any) {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 rounded-lg shadow-md md:shadow-md lg:shadow-lg hover:shadow-gray-800">
        <h2 className="p-4 text-xl title-font font-medium text-center">{studie.university}</h2>
        <div className="p-4 text-lg font-medium text-center">{studie.title}</div>
      </div>
    </>
  )
}

export default EducationItem
