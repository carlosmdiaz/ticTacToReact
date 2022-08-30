import React, {useEffect, useState} from 'react'
import Cells from './Cells';

function CellsContainer() {
  const [play, setPlay] = useState('');
  const [turn, setTurn] = useState(false);
  let arr = ["", "", "", "", "", "", "", "", "",]

  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.value === undefined ) {
      if (turn == false) {
        setPlay('O');
        setTurn(true);
      } else if ( turn === true) {
        setPlay('X');
        setTurn(false)
      }
    }
  }

  useEffect(() => {

  }, [play, turn]);
  

 
  return (
    <div className='cell-container'>
      {
        arr.map((elment, index) => {
          console.log(index);
          return <Cells 
                  id={index} 
                  play={play} 
                  handleClick={handleClick}
                  />
        })
      }
    </div>
  )
}

export default CellsContainer;