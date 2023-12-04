import GridTitle from "../Shared/GridTitle" 
import EducationItem from "./EducationItem"

function EducationList({ studies }:any) {
  return (
    <>
      <GridTitle grid_title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((item : any) => (
          <EducationItem key={item.id} studie={item} />
        ))}
      </div>
    </>
  )
}

export default EducationList
