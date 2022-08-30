import React, {useEffect, useState} from 'react'
import Cells from './Cells';

function CellsContainer() {
  const [playO, setPlayO] = useState('O');
  const [playX, setPlayX] = useState('X');
  const [turn, setTurn] = useState(false);
  const [index, setIndex] = useState();
  const arr = ["", "", "", "", "", "", "", "", "",];

  useEffect(() => {
    if(turn === false) {
      arr[index] = playO;
      console.log(arr);
    } else {
      arr[index] = playX;
      console.log(arr);
    }
  }, [turn, index]);
  

 
  return (
    <div className='cell-container'>
      {
        arr.map((elm, index) => {
          return <Cells 
                  arr={arr}
                  id={index} 
                  setIndex={setIndex}
                  playO={playO}
                  playX={playX} 
                  setPlayO={setPlayO}
                  setPlayX={setPlayX}
                  setTurn={setTurn}
                  elm={elm}
                  turn={turn}
                  />
        })
      }
    </div>
  )
}

export default CellsContainer;