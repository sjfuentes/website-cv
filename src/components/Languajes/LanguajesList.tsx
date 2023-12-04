import LanguajeItem from "./LanguajeItem"
import GridTitle from "../Shared/GridTitle"

function LanguajesList({ languajes }:any) {
  return (
    <>
      <GridTitle grid_title="Languajes"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languajes.map((item : any) => (
          <LanguajeItem key={item.id} languaje={item} />
        ))}
        </div>
    </>
  )
}

export default LanguajesList
