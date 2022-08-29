import logo from './logo.svg';
import './App.css';
import Cells from './Componets/Cells';

function App() {
  return (
    <div className="main-container">
      <div id='title'>Welcom to Tic Tac Toe</div>
      <div className='game-container'>
        < Cells />
        <button>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
