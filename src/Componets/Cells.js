import React, {useState} from 'react'

function Cells ({arr, playO, playX, id, elm, turn, setTurn, setIndex}) {

  const [play, setPlay] = useState('');
  const handleClick = (e) => {
    if(turn === false) {
      setPlay(playO);
      setTurn(true);
      setIndex(e.target.id);
    } else {
      setPlay(playX);
      setTurn(false);
      setIndex(e.target.id);
    }
  }
  
  return (
    <div className='cell' id={id} onClick={handleClick}>{`${play}`}</div>
  )
}

export default Cells;