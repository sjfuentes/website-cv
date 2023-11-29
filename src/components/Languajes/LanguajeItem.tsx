function LanguajeItem({ languaje }: any) {
  return (
    <div className='card'>
          <div className='num-display'>{languaje.id}</div>
          <div className="text-display">{languaje.languaje}</div>
          <div className="text-display">{languaje.level}</div>
    </div>
  )
}

export default LanguajeItem
