import React from 'react'

function Cells ({play, handleClick, id}) {
  return (
    <div className='cell' id={id} onClick={handleClick}>{`${play}`}</div>
  )
}

export default Cells;