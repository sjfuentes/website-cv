import LanguajeItem from "./LanguajeItem"

function LanguajesList({ languajes }:any) {
  return (
    <div className="feedback-list">
      {languajes.map((item : any) => (
        <LanguajeItem key={item.id} languaje={item} />
      ))}
    </div>
  )
}

export default LanguajesList
